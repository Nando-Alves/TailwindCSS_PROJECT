const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-item")
const cartTotal = document.getElementById("cart-value")       
const checkoutBtn = document.getElementById("finish")         
const closeModalBtn = document.getElementById("close-modal")   
const cartCounter = document.getElementById("cart")            
const addressInput = document.getElementById("edress")       
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
          <button  class = "remove-from-cart-btn" data-name="${item.name}" >
            Remover
          </button>
        </div>
      </div>
    `

    total += item.price * item.quantity

    cartItemsContainer.appendChild(cartItemElement);
  });

cartTotal.textContent = total.toLocaleString("pt-BR",{
  style:"currency",
  currency:"BRL"
});

cartCounter.innerText= cart.length;

}



// Função para remover o item do carrinho
cartItemsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name");
        removeItemCart(name);
    }
});


function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1){
        const item = cart[index];

        if(item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }
        
        cart.splice(index, 1);
        updateCartModal();
    }


}


addressInput.addEventListener("input",function(event){
  let inputvalue  = event.target.value;

  if (inputvalue !== ""){
    addressInput.classList.remove("border-red-500")
    addressWarn.classList.add("hidden")
  }

})

checkoutBtn.addEventListener("click", function(){
  if(cart.length === 0) return;
  if(addressInput.value === ""){
    addressWarn.classList.remove("hidden")
    addressInput.classList.add("border-red-500")
    return;
  }
// Enviar o pedido para api whats
const cartItems = cart.map((item) => {
  return (
    `* ${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price}`
  );
}).join("\n");

const message = encodeURIComponent(cartItems);
const phone = "+5585996539372";

window.open(`https://wa.me/${phone}?text=${message}\n\nEndereço: ${addressInput.value}`, '_blank');

cart= [];
updateCartModal();
})

function checkrestaurantOpen(){
  const data = new Date();
  const hour = data.getHours();
  return hora >= 18 && hora <22;
}

const spanIten = document.getElementById("data-span")
const isOpen = checkrestaurantOpen();

if  (isOpen){
  spanIten.classList.remove("bg-red-500");
  spanIten.classList.add("bg-green-600")
}else{
  spanIten.classList.remove("bg-green-600")
  spanIten.classList.add("bg-red-500")
}