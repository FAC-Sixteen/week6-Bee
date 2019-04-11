const fs = require('fs');
// const querystring = require('querystring');
const path = require('path');


const homeHandler = (res) => {
        fs.readFile(path.join(__dirname, '../public/index.html'), (err, file) => {
            if (err){
                console.log(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(file);
        });

}


module.exports = {
    homeHandler
}