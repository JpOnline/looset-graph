// Quiet variant of karma.conf.js, used by `npm run test:quiet`.
//
// The bulk of the noise in a normal run is karma echoing the app's own
// console.log / tap> output (the big `LOG: '{...}'` dumps) — that is controlled
// by `client.captureConsole`, not by `logLevel`. Turning it off leaves
// cljs-test's pass/fail reporting intact.
//
// Trade-off: this also hides any console.log you add while debugging, so use
// `npm test` when you need those.
module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        // The directory where the output file lives
        basePath: 'out',
        // The file itself
        files: ['ci.js'],
        frameworks: ['cljs-test'],
        plugins: ['karma-cljs-test', 'karma-chrome-launcher'],
        colors: true,
        // Only karma warnings/errors, not its per-run INFO chatter.
        logLevel: config.LOG_WARN,
        browserConsoleLogOptions: { level: 'error', terminal: false },
        client: {
            // The main switch: stop echoing the app's console.log / tap> output.
            captureConsole: false,
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    })
};
