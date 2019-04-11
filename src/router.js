const handler = require('./handler');

const router = (request, response) => {
  const { url } = request;
  const method = request.method;

  if (method === "GET") {
  if (url === '/') {
    handler.homeHandler(response);
  }

  else if (url.includes('/getreview')) {
    handler.getReviewHandler(request, response, url);
  }

  else if (url.includes('public')){
    handler.publicHandler(request, response);
  } else {
    return;
    // handler.errorHandler(request, response);
  }
}

else if (method === "POST") {
  if (url === '/getreview') {
    // console.log("Here's request: ",request.url);
    handler.getReviewHandler(request, response);
  }
}
};

module.exports = router;
