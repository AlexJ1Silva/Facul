

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
  <div class="text">
  <span>C</span><span>h</span><span>a</span><span>r</span><span>b</span><span>ô</span><span>&nbsp;</span><span>T</span><span>o</span><span>y</span><span>s</span><span>&nbsp;</span> </div>
    
  <img src="img-Projeto/ur6.1.png" >
      
  
  <div class="row">
  <span>Bem-vindo à Charbô Toys!</span>

  <span>Há 15 anos, a Charbô Toys tem sido sinônimo de qualidade e encanto no ramo da confecção de ursos de pelúcia. Nós nos dedicamos a criar lembranças especiais para festas infantis, casas de festas e também oferecemos a comodidade do nosso e-commerce.</span>
  
  <span>Na Charbô Toys, entendemos o quanto momentos de celebração são importantes na vida das crianças. Por isso, nos empenhamos em produzir ursos de pelúcia únicos e cativantes, que despertam sorrisos e encantam corações. Cada um dos nossos produtos é cuidadosamente confeccionado com materiais de alta qualidade, garantindo um toque suave e durabilidade para acompanhar as aventuras dos pequenos por muito tempo.</span>
  
  <span>Nosso compromisso com a excelência vai além da qualidade dos nossos ursos de pelúcia. Sabemos que cada festa é única e especial, por isso oferecemos uma ampla variedade de opções de personalização. Desde a escolha de cores, estampas e acessórios, até a inclusão de detalhes personalizados, estamos prontos para transformar suas ideias em realidade. Queremos fazer parte das suas memórias mais queridas, tornando cada momento ainda mais especial e inesquecível.</span>
  
  <span>Além disso, a Charbô Toys entende a importância da praticidade e comodidade nos dias de hoje. Por isso, disponibilizamos nossa loja virtual, onde você pode explorar e adquirir nossos produtos com facilidade, sem precisar sair de casa. Navegue em nosso site e descubra uma infinidade de opções encantadoras para presentear ou decorar suas festas. Estamos sempre atualizando nosso catálogo, trazendo novidades que acompanham as tendências do universo infantil.</span>
  
  <span>Ao escolher a Charbô Toys, você está escolhendo uma empresa comprometida em oferecer produtos de qualidade, atendimento excepcional e soluções personalizadas. Valorizamos cada cliente e buscamos superar suas expectativas, proporcionando momentos mágicos e cheios de amor.</span>
  
  <span>Seja bem-vindo à Charbô Toys, onde a magia dos ursos de pelúcia ganha vida. Estamos ansiosos para ajudá-lo a criar lembranças encantadoras que serão eternas.</span>
  
  <span>Equipe Charbô Toys</span>
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

  <div class="row">
  <img src="img-Projeto/capaPortifolio2.png" >
  <span>A Charbô Toys é uma empresa de confecção de ursos de pelúcia que está no mercado há 15 anos. Nossa especialidade é a criação de lembranças para festas infantis, casas de festas e atendimento através do nosso e-commerce.</span>
  </div><br>
  
  <div class="row2">
  <img src="img-Projeto/ur1.jpeg" >
  <img src="img-Projeto/urso5.png" >
  <img src="img-Projeto/ur3.jpeg" > 
  </div>

  <div class="row3">
  <img src="img-Projeto/ur4.jpeg" >
  <img src="img-Projeto/ur5.jpeg" >
  </div>
  

  <div class="row">

  <span>Utilizamos apenas materiais de alta qualidade e trabalhamos com dedicação para criar ursos de pelúcia excepcionais que transmitem magia e proporcionam uma experiência única. Oferecemos um nível sem precedentes de personalização, desde escolha de cores, estampas e acessórios, até a inclusão de detalhes personalizados para tornar cada festa verdadeiramente singular.</span>
  </div>

  <div class="row4">
  <img src="img-Projeto/urso2.png" >
  <img src="img-Projeto/urso4.png" >
  </div>

  <div class="row">
  <span>Além disso, disponibilizamos a nossa experiência de compra on-line através do nosso e-commerce sofisticado, onde você pode explorar nosso extenso catálogo de produtos, escolher suas peças favoritas e adquiri-las no conforto do seu lar.</span>
  <img src="img-Projeto/capaPortifolio.png" >
  </div>

  <div class="row">

  <span>Ao escolher a Charbô Toys, você está escolhendo uma empresa comprometida em oferecer produtos de alta qualidade, atendimento excepcional e soluções personalizadas para tornar seus sonhos realidade. Estamos ansiosos para guiá-lo através de um mundo encantado, onde cada detalhe é cuidadosamente planejado para criar lembranças que durarão para sempre.</span>
  <span>© Copyright <b>Charbô Toys</b></span>

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
 <span>Há 15 anos, nossa empresa tem iluminado sorrisos e conquistado corações através da confecção de ursos de pelúcia excepcionais. A Charbô Toys é uma referência no ramo, dedicada a criar lembranças memoráveis para festas infantis, casas de festas e atender às necessidades dos nossos clientes através do nosso renomado e-commerce.</span>
 <span>Na Charbô Toys, entendemos a importância dos momentos de celebração na vida das crianças. Cada um dos nossos ursos de pelúcia é meticulosamente concebido e confeccionado para transmitir a mais pura magia, proporcionando uma experiência única. Utilizando apenas os materiais mais refinados e de alta qualidade, garantimos que nossos ursos de pelúcia encantem tanto pelo toque suave quanto pela sua durabilidade incomparável.</span>
 <span>Nossa excelência vai além da qualidade dos nossos produtos. Na Charbô Toys, oferecemos um nível sem precedentes de personalização, para que cada festa seja verdadeiramente singular. Desde a escolha de cores vibrantes, estampas cativantes e acessórios encantadores, até a inclusão de detalhes personalizados, estamos prontos para transformar suas ideias em realidade. Queremos que nossos ursos de pelúcia façam parte das suas memórias mais preciosas, tornando cada momento inesquecível.</span>
 <span>Além disso, na era da praticidade e conveniência, a Charbô Toys disponibiliza a sua experiência de compra on-line. Através do nosso e-commerce sofisticado, você pode explorar nosso extenso catálogo de produtos, escolher suas peças favoritas e adquiri-las no conforto do seu lar. A cada visita ao nosso site, você descobrirá uma variedade infinita de opções encantadoras para presentear ou decorar suas festas. Mantemos nosso catálogo atualizado constantemente, para acompanhar as últimas tendências e garantir que sua escolha seja sempre excepcional.</span>
 <span>Ao escolher a Charbô Toys, você está escolhendo uma empresa comprometida em oferecer produtos de alta qualidade, atendimento excepcional e soluções personalizadas para tornar seus sonhos realidade. Valorizamos cada cliente e buscamos superar suas expectativas, criando momentos mágicos repletos de amor e encantamento.</span>
 <span>Dê as boas-vindas ao deslumbrante universo dos ursos de pelúcia da Charbô Toys. Estamos ansiosos para guiá-lo através de um mundo encantado, onde cada detalhe é cuidadosamente planejado para criar lembranças que durarão para sempre.</span>
 <span>Equipe Charbô Toys</span>

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