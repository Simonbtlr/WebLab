const path = require('path');

module.exports = {
    entry: './js/child_labour/mission_cards.js',
    output: {
        filename: 'mission_cards_webpacked.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
