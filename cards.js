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
            "gap-4"
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
loadCategories()
