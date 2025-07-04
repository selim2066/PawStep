/**
 * APIs
The following APIs are available in Peddy:

Fetch All Pets

Endpoint: https://openapi.programming-hero.com/api/peddy/pets
Description: Retrieves a list of all available pets for adoption. The data includes details like pet name, type, age, and adoption status.
Fetch Pet Details by ID

Endpoint:https://openapi.programming-hero.com/api/peddy/pet/pet-id

Example: https://openapi.programming-hero.com/api/peddy/pet/1

Description: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description

Fetch All Pet Categories

Endpoint: https://openapi.programming-hero.com/api/peddy/categories

Description: Fetches a list of all pet categories available in the platform, such as dogs, cats, rabbit , bird, etc.

Fetch Pets by Category

Endpoint: https://openapi.programming-hero.com/api/peddy/category/categoryName

Example: https://openapi.programming-hero.com/api/peddy/category/dog

Description: Fetches data of pets under a specific category, in this case, dogs. This can be used to filter pets based on their category.
 */
console.log(" https://openapi.programming-hero.com/api/peddy/categories")

// ! Category by Button

const loadCategories = () => {
  fetch(' https://openapi.programming-hero.com/api/peddy/categories')
    .then(response => response.json())
    .then(data => displayButtonCat(data.categories))
    .catch(error => console.error('Error fetching categories:', error));
}

function displayButtonCat(categories) {
  console.log(categories);
  const buttonContainer = document.getElementById('buttonContainer')
  categories.forEach(category => {
    const btn = document.createElement('div')
    // btn.classList.add(
    //     'btn',
    //     'px-4',
    //     'py-2',
    //     'w-[310px]',
    //     'h-[100px]',
    //     'rounded-4xl',
    //     'text-3xl'
    // );
    // btn.classList.add(
    //     "btn",
    //     "px-4",
    //     "py-2",
    //     "w-[310px]",
    //     "h-[100px]",
    //     "rounded-2xl",
    //     "text-3xl",
    //     "flex",
    //     "items-center",
    //     "gap-4",
    //     "hover:bg-green-100",
    //     "hover:rounded-[3rem]"

    // );
    // btn.innerHTML = ` 

    // <img 
    // class="w-16 h-16 object-contain"
    // src="${category.category_icon}"
    // alt=""
    // />${category.category}
    // `;

    btn.innerHTML = `
  <div onclick='showCategory("${category.category}")' class="btn px-4 py-2 h-[75px] lg:w-[310px] md:h-[100px]  rounded-2xl text-3xl flex items-center gap-4 hover:bg-green-100 hover:rounded-[3rem]">
    <img 
      class="w-16 h-16 object-contain" 
      src="${category.category_icon}" 
      alt="${category.category}" 
    />
    ${category.category}
  </div>
`;

    buttonContainer.appendChild(btn)
  });

}


//display cards by button category
// function showCategory(category) {
//   fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
//     .then(res => res.json())
//     // .then(data =>console.log(data.data))
//     .then(data => {


//       displayPetCards(data.data)
//     })

//     .catch(error => console.error(error));
// }


async function showCategory(category) {
  showSpinner();

  const start = Date.now(); // ⏱️ Start timing

  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
    const data = await res.json();

    displayPetCards(data.data);
  } catch (error) {
    console.error(error);
  } finally {
    const elapsed = Date.now() - start;
    const delay = Math.max(0, 2000 - elapsed); // Wait remaining time if needed

    setTimeout(() => {
      hideSpinner();
    }, delay);
  }
}

//! challenge part
const spinner = document.getElementById('loadingSpinner');

function showSpinner() {
  document.getElementById("loadingSpinner").classList.remove("hidden");
  document.getElementById("cardContainer").classList.add("hidden"); // 🔒 hide cards
}

function hideSpinner() {
  document.getElementById("loadingSpinner").classList.add("hidden");
  document.getElementById("cardContainer").classList.remove("hidden"); // 🔓 show cards
}


















// ! cards

// fetch data
const loadPets = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response => response.json())
    .then(data => displayPetCards(data.pets))
    .catch(error => console.log('got error', error))
}

// pet cards
function displayPetCards(pets) {
  console.log(pets);
  const cardContainer = document.getElementById('cardContainer')
  cardContainer.innerHTML = ''
  // const liked = document.getElementById('liked')
  if (pets.length == 0) {
    cardContainer.classList.remove('grid', 'md:grid-cols-4', 'mx-auto', 'p-10', 'gap-5');
    cardContainer.innerHTML = `
 <div class="flex flex-col justify-center items-center space-y-6 p-10">
    <img src="assetsPawstep/error.webp" alt="">
    <h1 class="text-5xl text-center">Opps!! No Information Available</h1>
    <p class='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br>
its layout. The point of using Lorem Ipsum is that it has a.</p>
</div>
`;


  } else {
    cardContainer.classList.add('grid', 'md:grid-cols-4', 'mx-auto', 'p-10', 'gap-5');

  }
  pets.forEach(pet => {

    const div = document.createElement('div')
    div.innerHTML = `
    
    <div class="card bg-base-100 shadow-sm">
              <figure class="px-5 pt-5">
                <img
                  src="${pet.image}"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${pet.category}</h2>
                <div class="flex items-center gap-2">
                  <img
                    class="w-4 h-4"
                    src="https://img.icons8.com/?size=100&id=gGUs3TPWpvgb&format=png&color=000000"
                    alt=""
                  />

                  <p>Breed: ${pet.breed}</p>
                </div>
                <div class="flex items-center gap-2">
                  <img
                    class="w-4 h-4"
                    src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000"
                    alt=""
                  />

                  <p>Birth: ${pet.date_of_birth}</p>
                </div>
                <div class="flex items-center gap-2">
                  <img
                    class="w-4 h-4"
                    src="https://img.icons8.com/?size=100&id=vSyNHi4ldAc5&format=png&color=000000"
                    alt=""
                  />

                  <p>Gender: ${pet.gender}</p>
                </div>
                <div class="flex items-center gap-2">
                  <img
                    class="w-4 h-4"
                    src="https://img.icons8.com/?size=100&id=QHui8fGzf5rs&format=png&color=000000"
                    alt=""
                  />

                  <p>Price: ${pet.price}</p>
                </div>
                <div class="card-actions flex gap-2 justify-between pt-2">
                  <button onclick="likedImg('${pet.image}')" class="btn">
                    <img
                      class="w-5"
                      src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000"
                      alt=""
                    />
                  </button>
                  <button class="btn text-[#0E7A81] font-bold">Adopt</button>
                  <button onclick='loadDetails(${pet.petId})' id='detail-${pet.petId}' class="btn text-[#0E7A81] font-bold">Details</button>
                </div>
              </div>
            </div>

    `

    cardContainer.appendChild(div)
  })
}

function likedImg(img) {
  // alert('hi')
  const liked = document.getElementById('liked')
  const div = document.createElement('div')
  div.innerHTML = `
<img
                      class="w-full rounded-lg"
                      src="${img}"
                      alt=""
                    />
`
  liked.appendChild(div)
}

const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`
  const response = await fetch(url)
  const data = await response.json()
  displayDetails(data.petData)
}

function displayDetails(pet) {
  document.getElementById('modalDetails').showModal()
  const modalContent = document.getElementById('modalContent')
  modalContent.innerHTML = `
   <img
            src="${pet.image}"
            class="w-[636px] h-[320px] p-5 rounded-xl"
            alt=""
          />
          <div>
            <h1 class="text-2xl font-bold">${pet.pet_name}</h1>
            <div class="p-5 border-gray-300 border-b-[3px]">
              <div class="flex">
                <div>
                  <div class="flex items-center gap-2">
                    <img
                      class="w-4 h-4"
                      src="https://img.icons8.com/?size=100&id=gGUs3TPWpvgb&format=png&color=000000"
                      alt=""
                    />
                    <p>Breed: ${pet.breed}</p>
                  </div>

                  <div class="flex items-center gap-2">
                    <img
                      class="w-4 h-4"
                      src="https://img.icons8.com/?size=100&id=vSyNHi4ldAc5&format=png&color=000000"
                      alt=""
                    />
                    <p>Gender: ${pet.gender}</p>
                  </div>

                  <div class="flex items-center gap-2">
                    <img
                      class="w-4 h-4"
                      src="https://img.icons8.com/?size=100&id=vSyNHi4ldAc5&format=png&color=000000"
                      alt=""
                    />
                    <p>Vaccinated Status: ${pet.vaccinated_status}</p>
                  </div>
                </div>

                <div>
                  <div class="flex items-center gap-2">
                    <img
                      class="w-4 h-4"
                      src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000"
                      alt=""
                    />
                    <p>Birth: ${pet.date_of_birth.split("-")[0]}</p>
                  </div>

                  <div class="flex items-center gap-2">
                    <img
                      class="w-4 h-4"
                      src="https://img.icons8.com/?size=100&id=QHui8fGzf5rs&format=png&color=000000"
                      alt=""
                    />
                    <p>Price: ${pet.price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 class="font-bold text-lg pt-4">Details Information</h2>
              <p>
              ${pet.pet_details}
                </p>

              <div class="modal-action">
                <form method="dialog">
                  <button class="btn w-[460px] bg-[#0E7A81]/20 mx-auto flex justify-center text-center">Cancel</button>
                </form>
                
              </div>
            </div>
          </div>
  `
}

loadCategories()
loadPets()



// function showSpinner() {
//   spinner.classList.remove('hidden');
// }

// function hideSpinner() {
//   spinner.classList.add('hidden');
// }

