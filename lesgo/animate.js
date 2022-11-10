let tl = gsap.timeline({defaults:{duration :2}});



tl.from('.header',{
    'top':'-100%',
    ease:'back.out(.7)',
    duration:1.5,
})

tl.from('.banner',{
    "clip-path":"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    "top":"10%",
    duration:1.6,
},"-=0")
