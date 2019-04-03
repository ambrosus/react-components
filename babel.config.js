let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
} else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
}

const productionPlugins = [
    'babel-plugin-transform-react-constant-elements',
    [
        'babel-plugin-transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap',
        },
    ],
];

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react', '@babel/preset-typescript']),
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
    ],
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
    env: {
        cjs: {
            plugins: productionPlugins,
        },
        esm: {
            plugins: productionPlugins,
        },
        es: {
            plugins: productionPlugins,
        },
        production: {
            plugins: productionPlugins,
        },
        'production-umd': {
            plugins: productionPlugins,
        },
    },
};