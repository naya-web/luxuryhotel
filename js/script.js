// Start search window 
let searchBtn = document.getElementById('search-btn')
let home = document.getElementById('home')
searchBtn.onclick=function(){
  let inputDiv=document.createElement('div')
  let input= document.createElement('input')
  let close = document.createElement('div')
  close.innerHTML='X'
  close.className='close'
  input.className='input'
  input.type='search'
  input.autofocus=true
  input.placeholder='Type a keyword and hit enter...'
  inputDiv.className='input-div'
  inputDiv.append(close)
  inputDiv.append(input)
  home.append(inputDiv)

  
  close.onclick= () =>{
    inputDiv.remove()
  }
}
// End search window 


// Start subDropdown menu 
$(document).ready(function () {
  $('.dropdown-submenu a.dropdown-toggle').on('click', function (e) {
  $(this).next('.dropdown-menu').toggle();
  e.stopPropagation();
  e.preventDefault();
});
});
// End subDropdown menu 


// start navbar
let navEl = document.querySelector(".navbar");

window.addEventListener("scroll" , () => {
  if(window.scrollY >= 65) {
    navEl.classList.add("navbar-scrolled");
  }else{
    navEl.classList.remove("navbar-scrolled");
  }    
});
// end navbar

let moreGallery = document.querySelectorAll('.gallery img')
moreGallery.forEach(img => {
  img.addEventListener('click', (e)=>{
    let overlay = document.createElement('div')
    overlay.className='galleryOverlay'

    document.body.append(overlay)

    let imgBox = document.createElement('div')
    imgBox.className='img-box'
    overlay.append(imgBox)

    let close = document.createElement('div')
    let closeX = document.createTexrNode = 'X'
    close.append(closeX)
    close.className='close-img'
    overlay.append(close)

    let image = document.createElement('img')
    image.className='img-popup'
    image.src=img.src
    imgBox.append(image)

    close.onclick=()=>{
      overlay.remove()
    }
  })
})