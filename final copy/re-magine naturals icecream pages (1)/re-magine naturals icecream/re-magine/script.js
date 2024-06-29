gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

Shery.imageEffect("#back",{style: 3,config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.44,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9626865683781616},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.010204081632652962,"y":0}},"shapeScale":{"value":{"x":1,"y":1}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":2},"noise_speed":{"value":1.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":47.33,"range":[0,100]}},gooey:true});


// var swiper = new Swiper(".mySwiper", {
//   loop:true,
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },  
// });    



//cursor animation


var crsr = document.querySelector("#crsr")

  document.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
          x: dets.x,
          y: dets.y,
          transform:"translate(-50%,-50%)"
      })
  })

  
  var page1=document.querySelector("#page1")
  var page2=document.querySelector("#page2")
  var page3=document.querySelector("#page3")
  var page4=document.querySelector("#page4")
  var page5=document.querySelector("#page5")
  var page6=document.querySelector("#page6")
  var page7=document.querySelector("#lastpage")


  page1.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page2.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL"
  })
  page3.addEventListener("mouseenter",function(){
    crsr.innerHTML="CLICK"
  })
  page4.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page5.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page6.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL & FOLLOW"
  })
  page7.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })

  //yaha tk cursor animation tha



//navpagemain animation--------------------------------------
var menu =document.querySelector("#navpagemain-part2 i")
var close=document.querySelector("#full i")
var tml=gsap.timeline()

    tml.to("#full",{
        right:"0%",
        duration:.7,
        opacity:1

    })

    tml.from("#full h3",{
        x:250,
        duration:1,
        opacity:0,
        stagger:0.25

    })
    tml.pause() 

    menu.addEventListener("click",function(){
      menu.style.display="none";
      // menu.style.pointerEvents="none"
        tml.play();
    })
    close.addEventListener("click",function(){
      tml.reverse();
      gsap.to(menu,{
        delay:2,
        display:"initial"
      })
      // menu.style.

    })



//page2COLLAGEPAGE ANIMATION/////////////////////////////////////////////////////////////////////////////////////////////

var page2h1Text=document.querySelector("#page2 #page2left h1").textContent
var splittedText=page2h1Text.split("")
var cluttered=""
splittedText.forEach(function(elem){
    cluttered+= `<span>${elem}</span>`
})
document.querySelector("#page2 #page2left h1").innerHTML=cluttered

gsap.to("#page2 #page2left h1 span",{
    color:"black",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 40%",
        end:"top top",
        scrub:2,
        // pin:true
    }
})








// page1 =>
  var page1swiper = new Swiper("#page1 .page1swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      duration:2,
      disableOnInteraction: false,
    },  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  
  });  


  //page3 text effect animation
  var elems=document.querySelectorAll("#page3 .elem")
elems.forEach(function(elem){
    var index1=0;
    var index2=0;
    var index3=0;
    

    var animating=false;
    var h1s=elem.querySelectorAll("#page3 h1")
    var p1s=elem.querySelectorAll("#page3 p")
    var buttons=elem.querySelectorAll("#page3 button")



    document.querySelector("#page3").addEventListener("click",function(){
            if(!animating){
                animating=true

            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false;
                }
            }
        )
        gsap.to(p1s[index2],{
            top:"-=100%",
            ease:Expo.easeInOut,
            duration:1,
            onComplete:function(){
                gsap.set(this._targets[0],{top:"100%"});
                animating=false;
            }
        }
    )
    gsap.to(buttons[index3],{
      top:"-=100%",
      // rotate:"0deg",
      ease:Expo.easeInOut,
      duration:1,
      onComplete:function(){
          gsap.set(this._targets[0],{top:"100%"});
          animating=false;
      }
  }
  )
  
  
           index1===h1s.length-1?(index1=0): index1++;
           index2===p1s.length-1?(index2=0): index2++;
           index3===buttons.length-1?(index3=0): index3++;


            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(p1s[index2],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(buttons[index3],{
              top:"-=100%",
              // rotate:"0deg",
              ease:Expo.easeInOut,
              duration:1
          })
        }
        })


})




  
//page6 review page swiper
var tl = gsap.timeline({
  scrollTrigger:{
   scroller:'#main',
   trigger:'#page6',
   start:'top top',
   pin:true,
   scrub:3
  }
})
tl
.to('.containerlast',{
   left:'-100%'
})

var tl2 = gsap.timeline({
   scrollTrigger:{
    scroller:'#main',
    trigger:'.containerlast',
    start:'top 50%',
    scrub:3
   }
})
tl2
.to('#page6 .box img',{
    left:'10px',
    transform:'translate(-10px) scale(1.012)'

})

var page5swiper = new Swiper("#page5 .page5swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




    
var swiper8 = new Swiper("#page4 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const arrr=[
  {productImage:"https://media.istockphoto.com/id/470731269/photo/scoops-of-mango-sorbet.webp?b=1&s=170667a&w=0&k=20&c=bgm0vYICaCE0lGxKh19LVCwEeTVYvy0NJmcEoHPzeNY=",
  productName:"MANGO ICECREAM",
  productDes:"Ditch the ordinary, scoop up extraordinary! Our mango ice cream is a taste explosion of Alphonso mangoes, a luxurious treat that's perfect for mango lovers who crave the real deal",
  seasonImage:"./summer4.jpg"
},
{
  productImage:"https://www.aycofarms.com/wp-content/uploads/2018/04/Pineapple-Icecream-01-01.jpg",
  productName:"PINEAPPLE ICECREAM",
productDes:" Pucker up for perfection! Our pineapple ice cream is the perfect balance of sweet and tart, a refreshing treat that will transport you to a beachside bliss.",
seasonImage:"./winter5.jpg ",
season:"Winter"
} ,

{
  productImage:"https://media.istockphoto.com/id/520982830/photo/ice-cream-in-a-coconut.webp?b=1&s=170667a&w=0&k=20&c=zDe-yRwaanR4e2AAxWH-SxCKVuNCYklGvuIgMOq4nKs=",
  productName:"COCONUT ICECREAM",
  productDes:"Naturals is a pioneer of the ‘Tender Coconut’ flavour in the country. As an original flavour from Naturals, it is a huge favourite among ice cream lovers. It’s made with real malai from tender coconuts that are sourced from Kerala and Karnataka. You just can’t have enough of this delicious flavour!",
  seasonImage:"./summer4.jpg",
  season:"Summer"
},

{
  productImage:"https://media.istockphoto.com/id/1345295716/photo/a-scoop-of-grape-flavored-purple-ice-cream-served-in-a-white-bowl-close-up-of-gastronomic.webp?b=1&s=170667a&w=0&k=20&c=43PuOivpr6pTSjliBobYnDF7Ty-2jRe7oZBqx8Aqj-w=",
  productName:"BLACK GRAPES ICECREAM",
  productDes:" Expect a taste of heaven in every bite of our original Black Grapes ice cream. Its amazing taste will leave you craving for more!",
  seasonImage:"https://img.freepik.com/premium-photo/little-girl-sitting-rock-rain-she-is-wearing-yellow-raincoat-red-boots-holding-red-umbrella_14117-419180.jpg?w=1380 ",
  season:"Monsoon"
},
{
  productImage:"https://flockler.com/thumbs/sites/192/no-churn-pomegranate-ice-cream_s1500x0_q80_noupscale.jpg",
  productName:"POMEGRANATE ICECREAM",
  productDes:" Beyond the ordinary lies extraordinary flavor. Our pomegranate ice cream is a symphony of sweet and tart, with a beautiful pink hue that's as delightful to see as it is to savor",
  seasonImage:"./autum2.jpg ",
  season:"AUTUMN"
},
  {
    productImage:"https://i.pinimg.com/236x/c5/45/21/c54521d2f97f5d3283818ea4225cd720.jpg",
    productName:"KIWI ICECREAM",
    productDes:" This delicious flavour will transport you to another world. The Kiwi is imported from New Zealand which is known for its genuine taste that come together in our original ice cream, you’re bound to get lost in the taste!.",
    seasonImage:"./winter5.png ",
    season:"Winter"
  }  
  
]
var main2=document.querySelector("#page4 .swiper-wrapper")

var clutter=""



arrr.forEach(function(product){
  clutter+=`
  
                  <div class="swiper-slide"><img src="${product.productImage}" alt=""></div>
                  
                `
                
})
main2.innerHTML=clutter

const productContainer = document.getElementById("productname");
const descriptionContainer = document.getElementById("description");

swiper8.on('slideChange', function () {
const currentSlideIndex = this.activeIndex;
// Calculate index within the array boundaries
const effectiveIndex = currentSlideIndex % arrr.length; // modulo operator (%)
const product = arrr[effectiveIndex];

productContainer.textContent = product.productName;
descriptionContainer.textContent = product.productDes;

// Optional: Update background image based on season
if (product.seasonImage) {
  document.getElementById("page4").style.backgroundImage = `url(${product.seasonImage})`;
}
});



const swiperWrapper = document.querySelector("#page4 .swiper-wrapper");

// Assuming "arrr" contains your JSON data
arrr.forEach(function(product) {
const slide = document.createElement("div"); // Create a slide element
slide.classList.add("#page4 swiper-slide"); // Add the "swiper-slide" class

// Create and configure slide content based on your product object (product.productName, product.productImage, etc.)
const slideContent = `

  <img src="${product.productImage}" alt="${product.productName}">


  <h1>${product.productName}</h1>
  
  <p>${product.productDes}</p>
`; // Example slide content (replace with your own)

slide.innerHTML = slideContent;
swiperWrapper.appendChild(slide); // Add the slide to the carousel
});
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", function() {
swiper.slidePrev();
});

nextButton.addEventListener("click", function() {
swiper.slideNext();
});






//cursor animation

var crsr = document.querySelector("#cursor")

  document.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
          x: dets.x,
          y: dets.y
      })
  })