let tl = gsap.timeline();


function bigdiv(){
tl.to('.bigdiv',{
    width:'0vw',
    duration:2,

})

let bigdiv = document.querySelector('.bigdiv').firstElementChild;

setTimeout(()=>{bigdiv.style.display = 'none';},1000)
}

function page1(){
    tl.to('.message-div',{
        height:'70vh',
    })
 
    tl.to('.right-div',{
        height:'60vh',
        
    })
//     tl.to('.left-div input',{
// width:'50vw',
//     })
//     tl.to('.right-div input',{
//         width:'40vw',
//             })
}

bigdiv();
page1();