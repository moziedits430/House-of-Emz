const mainPhoto = document.querySelector("#main-photo");
const thumbNails = document.querySelectorAll(".thumbnails img");

thumbNails.forEach(function (thumb){
    thumb.addEventListener("click", function (){
        mainPhoto.src = thumb.src;
        mainPhoto.alt = thumb.alt;
    });
});

// The following is an array for the products
const products = [
    {
        id: 1,
        name: "Dusty rose gown",
        price: 1500,
        image: "Images/Design1.jpg",
        description: "Featuring a flattering fitted silhouette, dramatic floral ruffle shoulders, sheer puff sleeves with elegant cuffs, and exquisite floral embroidery adorned with delicate beadwork and sparkling embellishments, this gown is a true statement of luxury and femininity."
    },
    {
        id: 2,
        name: "African Print Maxi Dress",
        price: 2000,
        image: "Images/Design2.jpeg",
        description: "Make a statement with this elegant, figure-flattering maxi dress, beautifully designed with a rich burgundy bodice and a striking black-and-white African-inspired print accented with subtle red details."
    },
    {
        id: 3,
        name: "The Belle Set",
        price: 3800,
        image: "Images/Design3.jpeg",
        description: "This outfit has a beautiful blend of modern sophistication, chic casual wear, and feminine elegance. I'd market it as a stylish two-piece statement set."
    },
    {
        id: 4,
        name: "The Cozy Muse",
        price: 3200,
        image: "Images/Design4.jpg",
        description: "This outfit has a beautiful minimalist, sporty-luxe aesthetic. I'd market it as a luxury casual two-piece set: comfortable, sophisticated and effortlessly stylish."
    }
];

//To print out the products name in the console we use the for loop
//This is one way but I need to do the simple one using of

for (const product of products){
    console.log(`${product.name} - KES ${product.price * 2}`);
}

//So by adding *2 we are able to multiply the price value
//How to find an item in the array 

const found = products.find(function (product){
    return product.id === 2;
});

console.log(found.name);

//We need to create a bag where all the users products items will be stored

const order = []
const buttons = document.querySelectorAll("add-to-bag");
//But there is a problem in my html code there is a link before the order button

buttons.forEach(function (button){
    button.addEventListener("click", function(event){
        event.preventDefault();
        //Get the if from the button
        const item = button.document.querySelector("#1");
        console.log()
    })
})