module.exports = {
    content: ['./static/index.html', './static/js/*.js', "./static/js/*/*.js", "./static/js/*/*/*.js"],
    theme: {
        extend: {
            colors: {
                cg_blue: '#227c9d',
                cerulean_crayola: '#36a9d3',
                tiffany_blue: '#17c3b2',
                caribbean_green: '#1adb9e',
                max_yellow_red: '#ffcb77',
                floral_white: '#fef9ef',
                light_coral: '#fe6d73',
                flickr_pink: '#ed217c',
                english_violet: '#413c58',
                jet: '#323031',
                light_pink: '#f7a1c8',
                dark_blue_gray: '#635b86'
            },
            fontFamily: {
                body: ['Nunito']
            },
            backgroundImage: {
                waves: "url('/css/background.svg')"
            }
        },
    },
    plugins: [],
};
