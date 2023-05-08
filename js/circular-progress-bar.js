

let progressBar = document.querySelectorAll('.progress--bar');

const inViewport = (progressBar, observer) => {
  progressBar.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      progressBar.forEach(item => {
        if(entry.target.classList.contains('is-inViewport') && !item.target.classList.contains('watched')){
            let numElement = item.target.querySelector('.num');
            let num = parseInt(numElement.innerText);
            let count = 0;
            let time = 2000 / num;
            let circle = item.target.querySelector('.circle');
            
            setInterval(() => {
              if(count == num){
                clearInterval();
              } else{
                count += 1;
                numElement.innerText = count;
                item.target.classList.add("watched");
              }
            }, time)
          circle.style.strokeDashoffset = 454 - ( 454 * ( num / 100 ));
        }
      })
    });
};

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);

  });

 


