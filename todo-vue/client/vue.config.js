//this snippet was taken online 
// it is used to make API calls from server to client and vice-versa 
module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/',
                },
            },
        },
    },
}