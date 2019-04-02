declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

interface Document {
    onmousewheel?: any;
}

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (
        paths: string[],
        callback: (require: <T>(path: string) => T) => void
    ) => void;
};