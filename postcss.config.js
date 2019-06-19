module.exports = {
    plugins: {
        'postcss-import': {},
        "postcss-preset-env": {
            autoprefixer: {
                'browsers': ['> 1%', 'last 2 versions']
            }
        },
        "cssnano" : {
            preset: 'default',
        },
    }
};