const handler = require('./handler');


const router = (request, response) => {
    const { url } = request;

    if (url === '/'){
        handler.homeHandler(response);
    }


};


module.exports = router;