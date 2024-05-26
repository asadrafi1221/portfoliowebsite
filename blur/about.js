var tl = gsap.timeline();
function hugediv(){
    let aboutdiv = document.querySelector(".about-me");
let page1 = document.querySelector('.p-1');

setTimeout(()=>{aboutdiv.style.display='none'},800);
var tl = gsap.timeline();
setTimeout(()=>{
    tl.to('.p-1',{
        // background:'black',
    duration:0.9,
    })
},2000);
}


function scrollbar(){
    let tl=gsap.timeline();
    tl.to('.slidebar',{
        x:-0,
       
    })
tl.pause();
    let menu = document.querySelector('.menubutton');
    let close= document.querySelector('.closebutton');
    menu.addEventListener('click',()=>{tl.play();})
close.addEventListener('click',()=>{tl.reverse();})

}

function experience(){
    gsap.to('.p-2 h1',{
        transform:"translateX(-30%)",
        // duration:9,
        scrollTrigger:{
            // scroller:"body",
            trigger:".p-2",
            scrub:2,
            pin:true,
            
        }
    })
}


function moveimage(){
const image = document.querySelector('.content img');

document.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 60; // Increase multiplier to rotate more
    const yPos = (e.clientY / window.innerHeight - 0.5) * 60; // Increase multiplier to rotate more
    
    gsap.to(image, {
        duration: 0.5,
        rotationY: xPos,
        rotationX: -yPos,
        ease: 'power2.out'
    });
});
}

function navbar(){

    tl.from(".navbar h3",{
        x:-20,
    duration:1,
    opacity:0,
    ease:"bounce"
    
    })
    
    tl.from(".navbar p",{
    y:-20,
    opacity:0,
    duration:1,
    ease:"bounce",
    stagger:0.2
    })

    
}
function animatep1(){

     tl.from('.page-1 img',{
        opacity:0,
     })
     tl.from('.p-1 h1',{
        opacity:0,
        x:50,
        ease:"bounce",
     })
}

 
function skillset(){
    let tl=gsap.timeline();
    tl.to('.p-3 p',{
        x:820,
        duartion:8,
        scrollTrigger: {
                        // scroller: "body",
                        trigger: ".p-3",
                        scrub: 2,
                     }
    })
   
}
function p3(){
    let tl = gsap.timeline();
    tl.from('.content-p3 #check',{
        opacity:0,
        y:199,
       
        
        scrollTrigger: {
            
            trigger: ".content-p3",
            scrub: 2,
         }

         
})
tl.to('.skillset h6',{
    width:'68vw',
    duration:0.5,
    scrollTrigger: {
            
        trigger: ".skillset",
        scrub: 2,
     }
 })
 tl.to('.skillset p',{
    width:'65vw',
    duration:0.5,
    scrollTrigger: {
            
        trigger: ".skillset",
        scrub: 2,
     }
 })
    
}

navbar();
animatep1();
hugediv();
experience();

// moveimage();
// visitpara();
scrollbar();
p3();