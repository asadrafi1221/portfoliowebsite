

function animatep1_content(){
   let tl=gsap.timeline();
   tl.to('.p1-content',{
    height:'50vh',
    duration:1.5,
    fontSize:'2vw',
    ease:"bounce",
   })
   tl.from('.p1-content h1',{
    opacity:0,
    x:-23,
   })
   tl.from('.p1-content p',{
    opacity:0,
    y:-23,
   })
}

function animatep2(){
    let tl=gsap.timeline();
    tl.from('.content-p2 h1',{
opacity:0,
y:-50,
scrollTrigger:{
    scroller:"body",
    trigger:".content-p2",
    scrub:2,
}
    })
    tl.from('.content-p2 p',{
        opacity:0,
        y:50,
       
        scrollTrigger:{
            scroller:"body",
            trigger:".content-p2",
            scrub:2,
        }
            })
}

function slidebar(){
    let tl=gsap.timeline();
    tl.to('.slidebar',{
        x:-0,
       
    })
tl.pause();
    let menu = document.querySelector('.slidebarmenu');
    let close= document.querySelector('.closebutton');
    menu.addEventListener('click',()=>{tl.play();})
close.addEventListener('click',()=>{tl.reverse();})
}
animatep1_content();
animatep2();
slidebar();
