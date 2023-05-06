

function home() {
  
  const sobreContainer = document.querySelector("#sobreContainer");
  sobreContainer.innerHTML = '';
  const homeContainer = document.querySelector("#homeContainer");
  const portifolioContainer = document.querySelector("#portifolioContainer");
  portifolioContainer.innerHTML = '';
  console.log((homeContainer.querySelector("div > div") && homeContainer.childElementCount > 0));

  const home = document.createElement("div");
  home.classList.add("home");

  let homeContainsDiv = homeContainer.querySelector("div > div") && homeContainer.childElementCount > 0;

  if (!homeContainsDiv) {

    const homeInnerHTML = `
  <div class="text font-effect-fire-animation " ><span>C</span><span>h</span><span>a</span><span>r</span><span>b</span><span>ô</span><span>&nbsp;</span><span>T</span><span>o</span><span>y</span><span>s</span><span>&nbsp;</span> </div>
    
  <img src="img-Projeto/ur6.1.png" >
      
  
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur odio vero excepturi iusto accusamus, ea voluptatem! Perferendis minima sit quaerat, voluptates quis sapiente pariatur, qui non quidem in consequatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur odio vero excepturi iusto accusamus, ea voluptatem! Perferendis minima sit quaerat, voluptates quis sapiente pariatur, qui non quidem in consequatur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur odio vero excepturi iusto accusamus, ea voluptatem! Perferendis minima sit quaerat, voluptates quis sapiente pariatur, qui non quidem in consequatur.

  </div>





  `

    home.innerHTML = homeInnerHTML;

    homeContainer.appendChild(home);

  }

}

function portifolio() {
  const sobreContainer = document.querySelector("#sobreContainer");
  sobreContainer.innerHTML = '';
  const homeContainer = document.querySelector("#homeContainer");
  homeContainer.innerHTML = '';
  const portifolioContainer = document.querySelector("#portifolioContainer");
  console.log((portifolioContainer.querySelector("div > div") && portifolioContainer.childElementCount > 0));

  const portifolio = document.createElement("div");
  portifolio.classList.add("portifolio");

  let portifolioContainsDiv = portifolioContainer.querySelector("div > div") && portifolioContainer.childElementCount > 0;

  if (!portifolioContainsDiv) {

    const portifolioInnerHTML = `
  
    
  <img src="img-Projeto/home3home.png" >
      
  
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur odio vero excepturi iusto accusamus, ea voluptatem! Perferendis minima sit quaerat, voluptates quis sapiente pariatur, qui non quidem in consequatur.
      2
  </div><br>
  <img src="img-Projeto/home3home.png" >
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea, et perferendis nisi sint quisquam natus. Blanditiis nemo inventore iusto eligendi repellendus molestias eius enim, porro odit provident, nobis quos.
      3
  </div>
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea, et perferendis nisi sint quisquam natus. Blanditiis nemo inventore iusto eligendi repellendus molestias eius enim, porro odit provident, nobis quos.
      4
  </div>
  


  `

    portifolio.innerHTML = portifolioInnerHTML;

    portifolioContainer.appendChild(portifolio);

  }

}

function sobre() {
  const homeContainer = document.querySelector("#homeContainer");
  homeContainer.innerHTML = '';
  const portifolioContainer = document.querySelector("#portifolioContainer");
  portifolioContainer.innerHTML = '';
  const sobreContainer = document.querySelector("#sobreContainer");
  console.log((sobreContainer.querySelector("div > div") && sobreContainer.childElementCount > 0));

  const sobre = document.createElement("div");
  sobre.classList.add("sobre");

  let sobreContainsDiv = sobreContainer.querySelector("div > div") && sobreContainer.childElementCount > 0;


  if (!sobreContainsDiv) {

    const sobreInnerHTML = `
  
    
  <img src="img-Projeto/home3home.png" >
      
  
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur odio vero excepturi iusto accusamus, ea voluptatem! Perferendis minima sit quaerat, voluptates quis sapiente pariatur, qui non quidem in consequatur.
      2
  </div><br>
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea, et perferendis nisi sint quisquam natus. Blanditiis nemo inventore iusto eligendi repellendus molestias eius enim, porro odit provident, nobis quos.
      3
  </div>
  <div class="row">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea, et perferendis nisi sint quisquam natus. Blanditiis nemo inventore iusto eligendi repellendus molestias eius enim, porro odit provident, nobis quos.
      4
  </div>
 


  `

    sobre.innerHTML = sobreInnerHTML;

    sobreContainer.appendChild(sobre);

  }

}


(function () {
  "use strict";

  /**
   * selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()