if(window.SimpleSlide){ /* If carrega apenas as pag que contem a class Slider*/
    new SimpleSlide({
        slide: 'quote',   
        pauseOnHover: true, 
      });
      new SimpleSlide({
        slide: 'portifolio',   
        pauseOnHover: true,
        nav: true
      });
}

if (window.SimpleAnime){
    new SimpleAnime();
} 
