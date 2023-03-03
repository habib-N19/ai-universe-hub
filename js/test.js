// // let allData;
// let count = 6;
// // fetching api
// function loadData() {
//     const url = 'https://openapi.programming-hero.com/api/ai/tools';

//     fetch(url)
//         .then(res => res.json())

//         .then(data => {
//             allData = data.data;
//             displayData(allData);
//         })

// }

// // display data on the page
// const displayData = (allData) => {
//     const dataContainer = document.getElementById('data-container');
//     dataContainer.innerHTML = '';

//     for (const dataCards of allData.tools.slice(0, count)) {
//         const dataCard = document.createElement('div');
//         dataCard.classList.add('col');
//         // console.log(dataCards.name);
//         dataCard.innerHTML = `
//         <div class="card h-100">
//             <img src="${dataCards.image}" class="card-img-top p-3" alt="..." />
//             <div class="card-body">
//                 <h5 class="card-title">Features</h5>
//                 <ol id="features-list" >
//                 ${dataCards.features.map(feature => `<li>${feature}</li>`).join('')}
//                 </ol>

//             </div>
//             <div class="text-black container px-3">
//                      <hr>
//             </div>
//             <!-- card footer -->
//             <div
//                 class="px-4 mb-4 d-flex justify-content-between align-items-center"
//             >
//                 <div>
//                     <h5 id="card-footer-title " class="mb-3">${dataCards.name}</h5>

//                     <div class="d-flex w-100 align-items-center">
//                         <div style="width: 25px" class="">

//                         </div>
//                         <div id="release-date" class="ms-2 mt-1">${dataCards.published_in}</div>
//                     </div>
//                 </div>
//                 <!-- modal button -->
//                 <div class=" btn btn-modal rounded-circle" onclick="loadAiDetails('${dataCards.id}')" data-bs-toggle="modal"
//                 data-bs-target="#btn-feature-modal">
                   
//                 </div>
//             </div>
//         </div>

// `;

//         dataContainer.appendChild(dataCard);
//     }
//     // hiding btn after data all loaded
//     const seeMore = document.getElementById('see-more')
//     if (count > 6) {
//         seeMore.classList.add('d-none');
//     } else {
//         seeMore.classList.remove('d-none');
//     }
// }
// const loadAiDetails = async id => {
//     const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
//     const response = await fetch(url);
//     const allData = await response.json();
//     console.log(allData.pricing[0].plan);
//     displayAiDetails(data);

// }


// // showing all info
// document.getElementById('btn-see-more').addEventListener('click', function () {
//     count = allData.tools.length;
//     displayData(allData);
//     // console.log('see more clicked');
// })

// // display all data
// function displayAiDetails(data) {
//     // console.log(data.description);

//     const modalDescription = document.getElementById('card-description');
//     modalDescription.innerText = data.description;
//     // pricing
//     const pricingCards = document.querySelectorAll('.pricing-data');
//     pricingCards.forEach((card) => {
//         const pricing = data.pricing[0];
//         const plan = pricing.plan;
//         const price = pricing.price;
//         card.innerHTML = `
//         <p>${price} <br> ${plan}</p>
//         `
//     });
//     // modal features
//     const modalFeature = document.getElementById('modal-features');
//     modalFeature.textContent = '';
//     Object.values(data.features).forEach(feature => {
//         const featuresList = document.createElement('li');
//         const featureName = feature.feature_name;
//         featuresList.textContent = featureName;
//         modalFeature.appendChild(featuresList);
//     })


//     // modal integration
//     const modalIntegration = document.getElementById('modal-integration');
//     modalIntegration.textContent = '';
//     for (const integrate of data.integrations) {
//         const integrateItem = document.createElement('li');
//         integrateItem.textContent = integrate;
//         modalIntegration.appendChild(integrateItem);
//     };

//     // modal image section
//     const modalImageContainer = document.getElementById('modal-image-container');
//     modalImageContainer.textContent = '';

//     const imageCardItems = document.createElement('div');
//     imageCardItems.innerHTML = `
//                                         <div class="position-relative">
// 											<img src="${data.image_link[0]}" class="card-img-top" alt="..." />
//                                             <div class="position-absolute top-0 end-0 text-white bg-danger m-2 px-2 py-1">${data.accuracy.score * 100}<span>% accuracy</span></div>
// 											<div class="card-body">
// 												<h4 class="card-text">
//                                                 ${data.input_output_examples[0].input}
// 												</h4>
//                                                 <p> ${data.input_output_examples[0].output}</p>
// 											</div>
// 										</div>
//     `;
//     modalImageContainer.appendChild(imageCardItems)
//     console.log();


// }