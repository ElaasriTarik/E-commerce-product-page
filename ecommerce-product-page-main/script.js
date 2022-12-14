let cartItems = document.querySelector('.cartItems');
let cartImage = document.querySelector('.cartImage');
let minus = document.querySelector('.minus');
let howMany = document.querySelector('.howMany');
let plus = document.querySelector('.plus');
let items = document.querySelector('.items');
let hiddenCart = document.querySelector('.hiddenCart');
const thisPrice = document.querySelector('.thisPrice');
const addToCartBtn = document.querySelector('.addToCartBtn');
let finalPrice = document.querySelector('.finalPrice');
let mainImagePreview = document.querySelector('.mainImagePreview');
let main_image_container = document.querySelector('.main_image');
let iconMenu = document.querySelector('.iconMenu');
let options = document.querySelector('.options');
const arrowMobileLeft = document.querySelector('.ArrowMobileLeft');
const arrowMobileRight = document.querySelector('.ArrowMobileRight');
const imagesLinks = ['images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg', 'images/image-product-1.jpg'];
const arrowsArray = [arrowMobileLeft, arrowMobileRight];
  let position = 0;
  arrowMobileRight.addEventListener('click', () => {
      if (position === 3) {
        return null;
      }
    mainImagePreview.src = imagesLinks[position];
      position += 1;
  })
  arrowMobileLeft.addEventListener('click', () => {
      if (position === 0) {
        return null;
      }
    mainImagePreview.src = imagesLinks[position];
      position -= 1;

  })
let startorders = 0;
howMany.textContent = startorders;
let state = false;
minus.addEventListener('click', (e) => {
  if (startorders != 0) {
   startorders -=1;
   howMany.textContent = startorders;
  }
})
plus.addEventListener('click', (e) => {
  if (startorders >= 0) {
    startorders += 1;
     howMany.textContent = startorders;
     cartImage.style.animation = "animate 0.6s linear 1";

     setTimeout(() => {
        cartImage.style.animation = "none";
     }, 1000)
  }
})
let thumbnails;
window.addEventListener('load', () => {
  changeImage();
  thumbnails.forEach((item) => {
    item.addEventListener('click', () => {
    let imgSrc = item.src.split('');
      let spliced = imgSrc.splice(22, imgSrc.length - 1);
      let newImage = spliced.splice(0, 22).join('');
      mainImagePreview.src = `${newImage}.jpg`;
      console.log(mainImagePreview.src);
      let mainSrc= mainImagePreview.src.split('');
      let mainSpliced = mainSrc.splice(22, imgSrc.length);
      if (mainSpliced.join('') === newImage) {
        thumbnails.forEach((item) => {
         item.style.filter = 'blur(0)';
        });
      item.style.filter = 'blur(0.9px)';
      }
    })
  });
})
function changeImage() {
thumbnails = document.querySelectorAll('.thumbnails');
}

let body =  document.querySelector('body');
main_image_container.addEventListener('click', (e) => {
if (window.innerWidth <= 400) {
 return null;
}

body.classList.toggle('darken_bg');
  body.innerHTML += `<div class="images_contaier biggerPreview" style="z-index: 10000">
     <div class="main_image ">
     <div class="arrows">
     <img src="images/icon-previous.svg" class="arrowsLogos">
     <img src="images/icon-next.svg" class="arrowsLogos">
     </div>

      <img src="images/image-product-1.jpg" alt="product 1" class="mainImagePreview">

     </div>
     <div class="products_images">
       <div class="product1 p">
      <img src="images/image-product-1-thumbnail.jpg" alt="" class="thumbnails">
       </div>
       <div class="product2 p">
      <img src="images/image-product-2-thumbnail.jpg" alt="" class="thumbnails">
       </div>
       <div class="product3 p">
      <img src="images/image-product-3-thumbnail.jpg" alt="" class="thumbnails">
       </div>
       <div class="product4 p">
      <img src="images/image-product-4-thumbnail.jpg" alt="" class="thumbnails">
       </div>
     </div>
  </div>`
  changeImage();
})
let deleteIcon;
addToCartBtn.addEventListener('click', (e) => {
  let price = 125;
  if (howMany.textContent == 0) {return null}
  let theFinalCheckout = parseInt(price * howMany.textContent);
  items.innerHTML =   `<div class="checkout">
       <div class="boughtItem">
         <img src="/images/image-product-1.jpg" alt="" class="boughtProductImage">
         <div class="titeAndPriceOfItem">
              <h3>Fall Limited Edition Sneakers</h3>
              <p class="priceAndFinal">$125 x<span class="itemsNumber">${howMany.textContent}</span><span class="finalPrice"> $${theFinalCheckout}</span></p>
         </div>
         <img src="images/icon-delete.svg" alt="" class="deleteIcon" style="cursor:pointer">
       </div>
       <button type="button" name="button" class="checkoutBtn" style="cursor:pointer">Checkout</button>
    </div> `
    deleteIcon = document.querySelector('.deleteIcon');

    cartImage.style.animation = "animate 0.6s linear 1";
    setTimeout(() => {
      cartImage.style.animation = "none";
    }, 500)

    deleteItems();
})
function deleteItems() {
  deleteIcon.addEventListener('click', () => {
    items.innerHTML = '';
  })
}
cartImage.addEventListener('click', () => {
//  cartItems.classList.toggle('listOfItems');
  if (cartItems.id === 'listOfItems') {
    cartItems.id = '';
  } else {
   cartItems.id = 'listOfItems';
  }
})
iconMenu.addEventListener('click', () => {
  //options.style.transform = 'translateX(0)';
  if (options.id === 'showOptionsMenu') {
    options.id = '';
    iconMenu.src = 'images/icon-menu.svg';
  } else {
   options.id = 'showOptionsMenu';
   iconMenu.src = 'images/icon-close.svg';
  }

})
