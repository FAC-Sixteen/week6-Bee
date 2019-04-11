const test = require("tape");
const runDbBuild = require("../databases/db_build");
const getReviews = require('../queries/getReviews');

test("testing databse build", t => {
  runDbBuild((err, res) => {
    t.equals(err, undefined, "error should be undefined");
    t.end();
  });
});

const baseDbGenerated = [ { id: 1, person_name: 'James', business_id: 1, rating: 4, freshness: 5, tv_quality: 4, banter: 3, mirror_coverage: 0, comment: 'Very happy with my haircut', name: 'Frank\'s Fresh Cuts', building_number_name: '123', street_name: 'Fake Street', postcode: 'AB12 3CD', website: 'https://www.google.com' }, { id: 1, person_name: 'Burhanda', business_id: 1, rating: 3, freshness: 3, tv_quality: 3, banter: 3, mirror_coverage: 3, comment: 'Distinctly average', name: 'Frank\'s Fresh Cuts', building_number_name: '123', street_name: 'Fake Street', postcode: 'AB12 3CD', website: 'https://www.google.com' } ];

test("testing getReviews returns a result", t => {
  runDbBuild((err, res) => {
    getReviews("Frank's Fresh Cuts", (error, response) => {
      t.equals(error, null, "Error should be undefined");
      t.deepEqual(response, baseDbGenerated, "Response unknown...for now");
      t.end();
    })
  })
})
