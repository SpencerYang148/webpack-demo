'use strict';
const fs = require('fs');
const path = require('path');

/**
 * @typedef {import("webpack").Compiler} Compiler
 */
/**
 * @typedef {import("webpack").Stats} Stats
 */
/**
 * @typedef {{
 *   filepath: string,
 *   filename: string,
 *   statsOptions?: Parameters<Stats["toJson"]>["0"]
 *   statsFields: string[]
 * }} StatsPluginArgument
 */

class StatsPlugin {
    /**
     * @param {StatsPluginArgument} options options object
     */
    constructor(options) {
        this.options = options;
    }

    /**
     * @param {Compiler} compiler the compiler instance
     */
    apply(compiler) {
        compiler.hooks.done.tap('StatsPlugin', (stats) => {
            this.generateStatsFile(stats);
        });
    }

    /**
     * @param {Stats} stats
     */
    async generateStatsFile(stats) {
        const { filepath, filename, statsOptions } = this.options;
        const statsFilePath = path.resolve(filepath, filename);
        await fs.promises.mkdir(path.dirname(statsFilePath), { recursive: true });
        const statsInfo = stats.toJson(statsOptions);
        await fs.promises.writeFile(statsFilePath, JSON.stringify(statsInfo));
    }
}

module.exports = StatsPlugin;
