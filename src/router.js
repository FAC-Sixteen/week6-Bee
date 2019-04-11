const handler = require('./handler');

const router = (request, response) => {
  const { url } = request;

  if (url === '/') {
    handler.homeHandler(response);
  } else if (url.includes('public')){
    handler.publicHandler(request, response);
  } else {
    return;
    // handler.errorHandler(request, response);
  }
};

module.exports = router;
