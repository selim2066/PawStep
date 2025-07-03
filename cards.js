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
    const buttonContainer=document.getElementById('buttonContainer')
    categories.forEach(category => {
        const btn = document.createElement('button')
        // btn.classList.add(
        //     'btn',
        //     'px-4',
        //     'py-2',
        //     'w-[310px]',
        //     'h-[100px]',
        //     'rounded-4xl',
        //     'text-3xl'
        // );
        btn.classList.add(
            "btn",
            "px-4",
            "py-2",
            "w-[310px]",
            "h-[100px]",
            "rounded-2xl",
            "text-3xl",
            "flex",
            "items-center",
            "gap-4",
            "hover:bg-green-100",
            "hover:rounded-[3rem]"

        );
        btn.innerHTML = `
        
        <img
        class="w-16 h-16 object-contain"
        src="${category.category_icon}"
        alt=""
        />${category.category}
        `;

buttonContainer.appendChild(btn)
    });

}


// ! cards

// fetch data
const pets = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response=>response.json())
    .then(data => displayPetCards(data.pets))
    .catch(error => console.log('got error', error))
}

// pet cards
function displayPetCards(pets){
const cardContainer=document.getElementById('cardContainer')
pets.forEach(pet=>{
    const div=document.createElement('div')
    div.innerHTML=`
    
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

                  <p>Birth:${pet.date_of_birth}</p>
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
                  <button class="btn">
                    <img
                      class="w-5"
                      src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000"
                      alt=""
                    />
                  </button>
                  <button class="btn text-[#0E7A81] font-bold">Adopt</button>
                  <button class="btn text-[#0E7A81] font-bold">Details</button>
                </div>
              </div>
            </div>

    `

    cardContainer.appendChild(div)
})
}

loadCategories()
pets()
