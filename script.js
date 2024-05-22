var tl = gsap.timeline();
tl.to("#img1",{
    
    y: 15,
    x: -1030,
    // opacity:0,
    duration:6,
    
})

gsap.from("#img6",{
    y:500,
    opacity:0,
    duration:2,
    transform: "rotateZ(360",
})

