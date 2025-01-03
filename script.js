

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });




  anime({
    targets:  '#right-hero-image',
    translateX: ['0%', '5%'], 
    duration: 5000, 
    easing: 'linear', 
   loop: true,
    direction: 'alternate', 
  });