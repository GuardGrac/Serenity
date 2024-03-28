        console.clear(); // Start with a clean console on refesh
        gsap.defaults({ease: "none"});
        const tl = gsap.timeline( {repeat:-1, repeatDelay: 1} )
        .to('.mouse-anim',{
            opacity: 0.1,
            y:5,
        });
 
        const scrollButton = document.querySelector('#scroll-button');
        const sectionCases = document.querySelector('#section_case');
        scrollButton.addEventListener('click', () => {
        console.warn(sectionCases);
        gsap.to(window, {
            duration: 1.5,
            scrollTo: sectionCases,
            ease: "power2"
        });
        });

        const main3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#circle",
                scrub: 1,
                start: "top 100%",
                end: "+=1300"
            }
        })
        main3.set(".text-anim3", { transformOrigin: "50% 50%" });
        main3.to(".text-anim3",{
            duration: 10,
            ease: "none",
            rotation: "+=360",   
        })