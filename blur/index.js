
var tl = gsap.timeline();

// function nav(){

// tl.from(".container h3",{
//     x:-20,
// duration:1,
// opacity:0,
// ease:"bounce"

// })

// tl.from(".container p",{
// y:-20,
// opacity:0,
// duration:1,
// ease:"bounce",
// stagger:0.2
// })
// tl.from(".content h1",{
//    opacity:0,
//    x:20,

//    ease:"back.out"
// })
// tl.from(".page-1",{
//     opacity:0,
// height:"0vh",
// ease:"bounce",

// })
// tl.from(".page-1 h1",{
//     opacity:0,
// y:50,
// ease:"bounce",

// })
// // tl.from(".page-1 p",{
// //     opacity:0,
// // y:50,
// // duration:3.1,
// // ease:"bounce",
// // repeat:-1,

// // })


// }
// function sidebar(){
//     let menu = document.querySelector('.menu');
//     let close = document.querySelector('.close')
//     console.log(close);
//      let sidetl = gsap.timeline();
//     sidetl.to(".sidebar ",{
//        x:-0,
//         duration:0.9,
//        ease:"bounce",

//     })
//     sidetl.from(".sidebar h4",{
//         opacity:0,
//         duration:0.6,
//         x:150,
//         ease:"bounce",
//         stagger:0.3,
//     })
//     sidetl.pause();
// menu.addEventListener('click',()=>{
//    sidetl.play();
// })
// close.addEventListener('click',()=>{
//     sidetl.reverse();
    
// })
// }
// function page2() {
  

//     tl.from('.page-2', {
//         height: 0,
//         opacity: 0,
//     });

//     gsap.from('.scroll-text h1', {
      
//         x: -60,
//         duration:0.3,
//         opacity:0,

//         scrollTrigger: {
//             scroller: "body",
//             trigger: ".scroll-text",
//             scrub: 2, 
//         }
//     });
//     gsap.from('.scroll-text p', {
//         x: 60,
//         opacity:0,
//         duration:0.3,

//         scrollTrigger: {
//             scroller: "body",
//             trigger: ".scroll-text",
//             scrub: 2, 
//         }
//     });
//     gsap.from(".big-text p",{
// opacity:0,
// fontSize:"2vw",
// scrollTrigger: {
//     scroller: "body",
//     trigger: ".big-text",
//     scrub: 2, 
// }
//     })
    
// }


// function page3() {

//     // gsap.from(".page-3", {
//     //     height: "0vw",
//     //     opacity: 0,
//     //     ease: "back.out",
//     // });

//     gsap.to(".experience p", {
//         x: -250,
//         scrollTrigger: {
//             trigger: ".experience",
//             scroller: "body",
//             scrub: 2,
//             pin: true,
//         }
//     });
// }




// let changetext= document.querySelector('#changetext');
// function textchanger(textElement) {
//     let arr = ['app developer', 'web developer', 'software engineer'];
//     let i = 0;

//     setInterval(() => {
//         textElement.innerHTML = arr[i];
//         i++;
//         if (i === arr.length) {
//             i = 0;
//         }
//     }, 3500);
// }


// nav();
// sidebar();
// textchanger(changetext);
// page2();
// page3();

function  bigdiv(){
  tl.to('.big-div',{
    width:'0vw',
    duration:'1.5',

  })
  let bigdiv = document.querySelector('.big-div');
  setTimeout(()=>{
       bigdiv.style.fontSize='0vw';
  },1600)
}
function navbar() {


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

    tl.from(".page-1 h1",{
        opacity:0,
        y:-20,

    })
    tl.from(".page-1 p",{
        opacity:0,
        y:20,

    })
}

function sidebar()
{ 
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

function page2() {
    gsap.from('.scroll-text h1', {
      opacity: 0,
      x: -50,
      duration: 0.5,
      scrollTrigger: { 
        trigger: ".scroll-text",
        scrub: 2,
      }
    });
    gsap.from('.scroll-text p', {
        opacity: 0,
        x: 50,
        duration: 0.5,
        scrollTrigger: { 
          trigger: ".scroll-text",
          scrub: 2,
         
        }
      });
  }
  
  function page3() {
    gsap.from('.javascript p', {
      opacity: 0,
      duration: 1,
      fontSize: "3vw",
      scrollTrigger: { 
        trigger: ".javascript",
        scrub: 2, 
      }
    });
  }

 
    
  bigdiv();
  navbar();
sidebar();
page2();
page3();


    



