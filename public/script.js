// search barber
const inputField = document.getElementById("input-field-barber");
const button = document.getElementById("barber-button");

const barberQuery = () => {
  const xhr = new XMLHttpRequest();
  let endpoint = `/getreview?q=${inputField.value}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.response);
    }
  };

  xhr.open("GET", endpoint, true);
  xhr.send();
};

// form review section
const businessName = document.getElementById("business-name");
const personName = document.getElementById("person-name");
const rating = document.getElementById("rating");
const freshness = document.getElementById("freshness");
const tvQuality = document.getElementById("tv_quality");
const banter = document.getElementById("banter");
const mirrorCoverage = document.getElementById("mirror_coverage");
const comment = document.getElementById("comment");
const reviewButton = document.getElementById("review-button");

const barberReview = () => {
  const xhr = new XMLHttpRequest();

  //feeding all barber form values into our url
  const endpoint = `/getreview?business_name=${
    businessName.value
  }&person_name=${personName.value}&rating=${rating.value}&freshness=${
    freshness.value
  }&tv_quality=${tvQuality.value}&banter=${banter.value}&mirror_coverage=${
    mirrorCoverage.value
  }&comment=${comment.value}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("done");
    }
  };

  xhr.open("POST", endpoint, true);
  xhr.send();
};

reviewButton.addEventListener("click", barberReview, true);
button.addEventListener("click", barberQuery, true);
