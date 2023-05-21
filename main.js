// change nav bar style& color on scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle 
    ('window-scroll',window.scrollY > 0)
})

// FAQ  close and open with javascript

const faq = document.querySelectorAll('.faq');

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

// slider

