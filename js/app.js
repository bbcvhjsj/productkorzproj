ScrollTrigger.config({ autoRefreshEvents: "none, refreshInit" });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

console.log("isTouch:", ScrollTrigger.isTouch);

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
        smoothTouch: true,
    });    

    if (ScrollTrigger.getAll().length) {
        setTimeout(() => ScrollTrigger.refresh(), 500);
    };
    
    gsap.fromTo('.hero-section', { opacity: 1 }, {
         opacity: 0,
         scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
         }
    })

    gsap.fromTo('.portfolio', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
           trigger: '.portfolio',
           start: 'bottom center',
           end: 'bottom',
           scrub: true,
        }
       })

    gsap.fromTo('.Kaspioplata', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
           trigger: '.Kaspioplata',
           start: 'center',
           end: 'bottom',
           scrub: true,
        }
       })

    gsap.fromTo('.sponsors', { opacity: 1 }, {
     opacity: 0,
     scrollTrigger: {
        trigger: '.sponsors',
        start: 'top',
        end: 'bottom',
        scrub: true,
     }
    })

    gsap.fromTo('.sotrudniki', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
           trigger: '.sotrudniki',
           start: 'center',
           end: 'bottom',
           scrub: true,
        }
    })
    
    gsap.fromTo('.image-wrapper', { scale: .6 }, {
        scale: .9,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
    });

    gsap.fromTo('.text-left', { x: -1000 }, {
        x: 0,
        scrollTrigger: {
            trigger: '.image-wrapper',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })
    
    gsap.fromTo('.text-right', { x: 1000 }, {
        x: 0,
        scrollTrigger: {
            trigger: '.image-wrapper',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })

    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        history.scrollRestoration = "manual";
    
        navLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
        
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
        
                if (targetSection) {
                    const smoother = ScrollSmoother.get();
                    const offset = smoother.offset(targetSection, "top top") - 80;
                    smoother.scrollTo(offset, true);
                }
            });
        });        
    
        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveLink(section.id),
                onEnterBack: () => setActiveLink(section.id),
                onLeave: () => clearActiveLink(section.id),
                onLeaveBack: () => clearActiveLink(section.id),
            });
        });
    
        function setActiveLink(activeId) {
            navLinks.forEach((link) => link.classList.remove('active'));
    
            const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    
        function clearActiveLink(leaveId) {
            const activeLink = document.querySelector(`.nav-link[href="#${leaveId}"]`);
            if (activeLink) {
                activeLink.classList.remove('active');
            }
        }
    });
    
const menuBtn = document.getElementById('menu-btn');
const hat = document.querySelector('.hat');
const logo = document.querySelector('.logo');
const texts = document.querySelectorAll('.lttext, .lttext1');
const navtext = document.querySelectorAll('.nav-link');
const menuIcon = document.querySelector('.anim-menu-btn__icon');

menuBtn.addEventListener('click', () => {

    hat.classList.toggle('active');

    menuIcon.classList.toggle('anim-menu-btn__icon--close');

    logo.classList.toggle('small');

    texts.forEach(text => {
        text.classList.toggle('active');
    });

    navtext.forEach(link => {
        link.classList.toggle('visible');
    });
});

hat.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        // Закрываем меню
        hat.classList.remove('active');
        menuIcon.classList.remove('anim-menu-btn__icon--close');
        logo.classList.remove('small');

        texts.forEach(text => text.classList.remove('active'));
        navtext.forEach(link => link.classList.remove('visible'));
    }
});

window.addEventListener("pagehide", function() {
    ScrollTrigger.killAll();
});