    var g = gsap;
    var tl = new TimelineMax({repeat:-1, yoyo: true, repeatDelay:.4});

    tl.from("#group", {duration: .2, y:-75, transformOrigin: "50% 50%", opacity:0, ease: Bounce.easeOut})
    .to("#path4", {duration: .15, y:"-=30", skewY:"+=10"})
    .to("#path4", {duration: .15, y:"+=30", skewY:"-=10"});
        
    // tl.to("#group", {opacity: 0});    
    


// transform: translate(-50px, -40px) rotate(-55deg);