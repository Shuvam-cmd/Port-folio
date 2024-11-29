

let menuIcon = document.querySelector('#menu-icon') ;
let navbar = document.querySelector('.navbar') ;

menuIcon.onclick  = () => {
    menuIcon.classList.toggle('bx-x') ;
    navbar.classList.toggle('active') ;
}


let sections = document.querySelectorAll('section') ;
let navlinks = document.querySelectorAll('header nav a ') ;

window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY ;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id') ;

        if(top >= offset && top < offset + height ) {
            navlinks.forEach(links => {
                links.classList.remove('active') ;
                document.querySelector('header nav a[herf*=' +id + ']').classList.add('active');
            }) ;
        };

    }) ;

    let header = document.querySelector('header') ;
    header.classList.toggle('ticky',window.srollY > 100 ) ;

    menuIcon.classList.toggle('bx-x') ;
    navbar.classList.toggle('active') ;
};

// sticky navbar

ScrollReveal({ 
    reset: true , 
    distance: '80px' ,
    duration:200

});

ScrollReveal().reveal('.home-content ,.heading', { origin : 'top' });
ScrollReveal().reveal('.home-img ,.services-container,.portfolio-box,.contact form', { origin : 'bottom' });

ScrollReveal().reveal('.home-content h1 , .about-img', { origin : 'left' });
ScrollReveal().reveal('.home-content p , .about-content', { origin : 'right' });

// typde js

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','DSA prb solver','Tech Enthusiastic'] ,
    typespeed:100 ,
    backspeed:100 ,
    backDelay:1000 ,
    loop:true

}) ;