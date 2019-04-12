// search barber
const inputField = document.getElementById("select-barber");
const button = document.getElementById("barber-button");
const gotContent = document.getElementById("gotContent");

const barberQuery = () => {
  const xhr = new XMLHttpRequest();
  let endpoint = `/getreview?q=${inputField.value}`;

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      gotContent.innerHTML = "";
      console.log(xhr.response);
      JSON.parse(xhr.response).map(obj => {
        const paragraph = document.createElement("p");
        const newline = document.createElement("br");
        const pContent = `Reviewer: ${obj.person_name}
        Rating: ${obj.rating}
        Comment: ${obj.comment}`;
        paragraph.textContent = pContent;
        gotContent.appendChild(paragraph);
        gotContent.appendChild(newline);
      });
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

fetch("/getbusinesses")
  .then(res => res.json())
  .then(json => updateSelect(json));

const updateSelect = json => {
  json.map(obj => {
    const option = document.createElement("option");
    const option2 = document.createElement("option");
    option.textContent = obj.name;
    option.value = obj.name;
    option2.textContent = obj.name;
    option2.value = obj.name;
    inputField.appendChild(option);
    businessName.appendChild(option2);
  });
};

reviewButton.addEventListener("click", barberReview, true);
button.addEventListener("click", barberQuery, true);
