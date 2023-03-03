// let data;
// let count = 6;
// // fetching api
// function loadData() {
//     const url = 'https://openapi.programming-hero.com/api/ai/tools';
//     // show loading screen
//     const loaderSection = document.getElementById('loader');
//     loaderSection.classList.remove('d-none');
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             data = data.data;
//             displayData(data);
//             // hide loading screen
//             toggleLoader(false);
//         })

// }

// // display data on the page
// const displayData = (data) => {
//     const dataContainer = document.getElementById('data-container');
//     dataContainer.innerHTML = '';

//     for (const dataCards of data.tools.slice(0, count)) {
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
//         // toggleLoader(false);
//         dataContainer.appendChild(dataCard);
//     }
//     // hiding btn after data all loaded
//     const seeMore = document.getElementById('see-more')
//     if (count > 6) {
//         seeMore.classList.add('d-none');
//     } else {
//         seeMore.classList.remove('d-none');
//     };
//     // sorting by date on button click
//     document.getElementById('btn-sort').addEventListener('click', function () {
//         data.tools.sort((a, b) => new Date(a.published_in) - new Date(b.published_in)); // sorting by date
//         displayData(data);
//     });
//     // loader
//     const toggleLoader = isLoading => {
//         const loaderSection = document.getElementById('loader');
//         if (isLoading) {
//             loaderSection.classList.remove('d-none');
//         }
//         else {
//             loaderSection.classList.add('d-none')
//         }
//     }
//     // showing all info
//     document.getElementById('btn-see-more').addEventListener('click', function () {
//         count = data.tools.length;
//         toggleLoader(true);
//         displayData(data);
//         toggleLoader(false);
//         // console.log('see more clicked');
//     })
// }