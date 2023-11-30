const path = require('path');

module.exports = {
    entry: './js/child_labour/notifications.js',
    output: {
        filename: 'notifications_webpacked.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
