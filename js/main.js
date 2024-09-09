document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});




const typed = document.querySelector('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        alert(`Thank you, ${name}! Your message has been sent.\n\nDetails:\nEmail: ${email}`);
        form.reset();
    });
});

