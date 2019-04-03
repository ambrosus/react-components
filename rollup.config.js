import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import sass from 'rollup-plugin-sass';
import svg from 'rollup-plugin-svg';
import postcss from 'rollup-plugin-postcss'

const input = './src/components';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};
const babelOptions = {
    exclude: /node_modules/,
    runtimeHelpers: true,
    configFile: './babel.config.js',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
};
const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
    namedExports: {
        './node_modules/prop-types/index.js': [
            'elementType',
            'bool',
            'func',
            'object',
            'oneOfType',
            'element',
        ],
    },
};

export default [
    {
        input,
        output: {
            file: 'build/umd/ambrosus-react.development.js',
            format: 'umd',
            name: 'Ambrosus react components',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve({
                extensions: ['.js', '.jsx', '.tsx'],
            }),
            babel(babelOptions),
            postcss(),
            sass(),
            svg(),
            commonjs(commonjsOptions),
            nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
            replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        ],
    },
    {
        input,
        output: {
            file: 'build/umd/ambrosus-react.production.min.js',
            format: 'umd',
            name: 'Ambrosus react components',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve({
                extensions: ['.js', '.jsx', '.tsx'],
            }),
            babel(babelOptions),
            postcss(),
            sass(),
            svg(),
            commonjs(commonjsOptions),
            nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
            uglify(),
        ],
    },
];