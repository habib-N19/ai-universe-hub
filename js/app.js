// fetching api
function loadData() {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))

}

// display data on the page
const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    for (const dataCards of data.tools) {
        // listItems(data);
        const dataCard = document.createElement('div');
        dataCard.classList.add('col');
        // console.log(dataCards.name);
        dataCard.innerHTML = `
        <div class="card h-100">
            <img src="${dataCards.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol id="features-list" >
                ${dataCards.features.map(feature => `<li>${feature}</li>`).join('')}
                </ol>

            </div>
            <div class="text-black container px-3">
                     <hr>
            </div>
            <!-- card footer -->
            <div
                class="px-4 mb-4 d-flex justify-content-between align-items-center"
            >
                <div>
                    <h5 id="card-footer-title " class="mb-3">${dataCards.name}</h5>

                    <div class="d-flex w-100 align-items-center">
                        <div style="width: 25px" class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                            </svg>
                        </div>
                        <div id="release-date" class="ms-2 mt-1">${dataCards.published_in}</div>
                    </div>
                </div>
                <!-- modal button -->
                <div class=" btn btn-modal rounded-circle" onclick="loadAiDetails('${dataCards.id}')" data-bs-toggle="modal"
                data-bs-target="#btn-feature-modal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </div>

`;

        dataContainer.appendChild(dataCard);
    }
}
const loadAiDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.pricing[0].plan);
    displayAiDetails(data.data);

}
function displayAiDetails(data) {
    // console.log(data.description);

    const modalDescription = document.getElementById('card-description');
    modalDescription.innerText = data.description;
    // pricing
    const pricingCards = document.querySelectorAll('.pricing-data');
    pricingCards.forEach((card) => {
        const pricing = data.pricing[0];
        const plan = pricing.plan;
        const price = pricing.price;
        card.innerHTML = `
        <p>${price} <br> ${plan}</p>
        `
    });
    // modal features
    const modalFeature = document.getElementById('modal-features');
    modalFeature.textContent = '';
    Object.values(data.features).forEach(feature => {
        const featuresList = document.createElement('li');
        const featureName = feature.feature_name;
        featuresList.textContent = featureName;
        modalFeature.appendChild(featuresList);
    })


    // modal integration
    const modalIntegration = document.getElementById('modal-integration');
    modalIntegration.textContent = '';
    for (const integrate of data.integrations) {
        const integrateItem = document.createElement('li');
        integrateItem.textContent = integrate;
        modalIntegration.appendChild(integrateItem);
    }


    // const pricingContainer = document.getElementById('pricing-container');
    // const priceDiv = document.createElement('div');
    // priceDiv.innerHTML = `${data.pricing.map(price => price.plan, price.price)}`
    // pricingContainer.innerHTML = `

    // `;
    // pricingContainer.appendChild(priceDiv)


    // const modalContainer = document.getElementById('modal-container');
    // const div = document.createElement('div');
    // div.innerHTML = `

    // `
}