const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    mode: "production",
    target: "node",
    entry: {
        app: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "project.js"
    },
    externals: [nodeExternals()]
}