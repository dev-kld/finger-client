import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import SVGSpriter from 'svg-sprite';
import Vinyl from 'vinyl';
import globby from 'globby';

export function svgSpritePlugin({
    originalIconsDirectory,
    outputDirectory
}: {
    originalIconsDirectory: string;
    outputDirectory: string;
}): Plugin {
    return {
        name: 'vite-plugin-svg-sprite',
        async buildStart() {
            const files = await globby(`${originalIconsDirectory}/**/*.svg`);
            const spriter = new SVGSpriter({
                dest: outputDirectory,
                mode: {
                    symbol: {
                        dest: '',
                        sprite: 'generated-sprite.svg'
                    }
                },
                shape: {
                    id: {
                        separator: '/',
                        generator: (svg) => {
                            const arr = `/${svg}`.split('/');
                            return arr[arr.length - 1].replace('.svg', '');
                        }
                    }
                }
            });
            files.forEach((file) => {
                const vinylFile = new Vinyl({
                    cwd: '/',
                    path: file,
                    contents: fs.readFileSync(file)
                });
                spriter.add(vinylFile);
            });
            spriter.compile((error, result) => {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (error) {
                    console.error(error);
                    return;
                }
                const { sprite } = result.symbol;
                fs.mkdirSync(path.dirname(sprite.path), { recursive: true });
                fs.writeFileSync(sprite.path, sprite.contents);
            });
        }
    };
}
