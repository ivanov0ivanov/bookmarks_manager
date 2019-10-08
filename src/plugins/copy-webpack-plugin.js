const
    path = require('path'),
    CopyPlugin = require('copy-webpack-plugin');
//source = require("../../../../../../../Yevhenii Ivanov/AppData/Local/Google/Chrome/User Data/Default/Bookmarks.bak");

module.exports = {
    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, "../../../../../../../Yevhenii Ivanov/AppData/Local/Google/Chrome/User Data/Default/Bookmarks*.bak*"),
                to: '[2].json.[ext]',
                test: /(.+\/)?(.+)\.bak\.json/
            }
        ])
    ],
};
