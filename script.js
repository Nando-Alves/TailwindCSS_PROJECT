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
    updateCartModal();
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
    
    
    if(parenButton){
        const name = parenButton.getAttribute("data-name")
        const price = parseFloat(parenButton.getAttribute("data-price"))
    
        addToCart(name,price)

         
    }


})



function addToCart(name,price){
    const duplicate = cart.find(item => item.name === name) 
    if(duplicate){
      duplicate.quantity += 1;
      
    } else{
      cart.push({
        name,
        price,
        quantity: 1, 
    })
    }
    
  updateCartModal()


}

// Atualiza o carrinho
function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justfy-between","mb-4","flex-col")

    cartItemElement.innerHTML = `
      <div class= "flex items-center justify-between">
        <div>
          <p class = "font-bold">${item.name}</p>
          <p>Qtd: ${item.quantity}</p>
          <p class= "font-bold mt-2">R$ ${item.price.toFixed(2)}</p>
        </div>
        <div>
          <button>
            Remover
          </button>
        </div>
      </div>
    `

    total += item.price * item.quantity

    cartItemsContainer.appendChild(cartItemElement);
  });
}
