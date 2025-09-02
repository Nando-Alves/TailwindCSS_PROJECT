const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-item")
const cartTotal = document.getElementById("cart-value")       
const checkoutBtn = document.getElementById("finish")         
const closeModalBtn = document.getElementById("close-modal")   
const cartCounter = document.getElementById("cart")            
const addressInput = document.getElementById("Endereço")       
const addressWarn = document.getElementById("error-address")   

let cart = [];
// Abrir o modal do carrinho
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex"
})

// Fechar o modal quando clicar fora
cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = "none"
  }
})

closeModalBtn.addEventListener("click", () => {
  cartModal.style.display = "none"
})


menu.addEventListener("click", function(event){

    let parenButton = event.target.closest(".add-to-cart-btn")
    console.log(parenButton);
    
    if(parenButton){
        const name = parenButton.getAttribute("data-name")
        const price = parseFloat(parenButton.getAttribute("data-price"))
    
        addToCart(name,price)

         
    }


})



function addToCart(name,price){
    cart.push({
        name,
        price,
        quantity: 1, 
    })
 
}