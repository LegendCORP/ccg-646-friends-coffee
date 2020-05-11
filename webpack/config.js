const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const glob = require('glob');
/*
 * This function need for create entry points for js-files that
 * takes from folder './src/js/scripts/'
 */
const getScripts = () => {
    return glob.sync(path.resolve(PROJECT_ROOT, 'src/js/pages/*.js')).reduce((acc, item) => {
        const path = item.split('/');
        const name = path
            .pop()
            .replace('.', '')
            .replace('js', '');

        if (path.indexOf('pages') > -1) {
            const pagesName = 'pages/' + name;
            acc[pagesName] = item;
        }

        return acc;
    }, {});
};

module.exports = {
    PROJECT_ROOT,
    webpack: {
        entrypoints: {
            ...getScripts(),
            main: path.resolve(PROJECT_ROOT, 'src/main.js'),
        },
    },
};
