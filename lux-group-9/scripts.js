/*new fullage("#fullpage", {
    
    autoScrolling: true,
    navigation:true,
    onLeave:(origin, destination,direction )=>{
    const section=destination.item;
    const title=section.querrySelector('h3');
    const tmline=new TimeLineMax();
    tmline.fromTo(title, .5,{y:'50',opacity:0}, {y:0, opacity:1});
    console.log("ok");
    if(destination.index===1){
        const pic2=document.querrySelector('.pic2');
        const description=document.querrySelector('.description2');

        tmline.fromTo(pic2, 0.7, {x:'100%'}, {x:"-30%"})

        //Add a text
        .fromTo(description, 0.5, {y:"50", opacity:0}, {y:0, opacity:1})
        //Adition of pictures ata time
        .fromTo(pic2[0 ],1, {opacity:1},{opacity:1});
      //  .fromTo(chairs[1 ],1, {opacity:0},{opacity:1})
        

    }
}}); 
*/
// the header elements
const tranlate = document.querySelectorAll(".translate");

const design = document.querySelector(".design");
const header = document.querySelector("header");// to get the length of the header

const shadow = document.querySelector(".shadow");
const content = document.querySelector(".col-md-6");
const section = document.querySelector("section");
const image_section = document.querySelector(".image_container");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;



window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    let sectionY =section.getBoundingClientRect();
    console.log(sectionY.top);
    tranlate.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform ='translateY(${scroll * speed}px)'
    })

    design.style.opacity = -scroll / (header_height/2)+1.2;
    shadow.style.height = '${scroll* 0.5 +400}px';
    content.style.transform = 'transformY(${scroll / (section_height + sectionY.top) * 50 - 50}px)';

})
