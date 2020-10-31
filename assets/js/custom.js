var tl = gsap;
tl.from("#path1", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});
// tl.from("#path1", {duration: 1, x: 50, y: 40, rotation: 55});
tl.from("#path2", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});
// tl.from("#path2", {duration: 1, x: -50, y: 120, rotation: -55});
tl.from("#path3", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});
// tl.from("#path3", {duration: 1, x: 50, y: 120, rotation: 55});
tl.from("#path4", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});
// tl.from("#path4", {duration: 1, x: -50, y: 110, rotation: -55});
tl.from("#path5", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});
// tl.from("#path5", {duration: 1, x: 50, y: 220, rotation: 55});
tl.to("#group", {duration: 2, rotation: 360, transformOrigin: "50% 50%"});

// transform: translate(-50px, -40px) rotate(-55deg);