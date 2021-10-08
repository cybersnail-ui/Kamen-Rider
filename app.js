/*const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x:300, y: -500},
        {x: 800, y:10},
        {x: window.innerWidth, y: 150}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".battle-hopper", 1,  {
        bezier: flightPath,
        ease: Power1.easeInOut
    }), ">"
);*/

/* second section */

const controller = new ScrollMagic.Controller();

/*
const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)*/
/*
const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to(".s2-1", 1,  {
        css:{ opacity: 0 },
    })

)
.add(
    TweenLite.to(".s2-2", 1,  {
        css:{ opacity: 0 },
    })

);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.two',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween3)
.addIndicators()
.setPin('.two')
.addTo(controller) */


const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to(".kr13-1", 1,  {
        css:{ opacity: 1 },
    })

)
.add(
    TweenLite.to(".kr13-2", 1,  {
        css:{ opacity: 0 },
    })

)
.add(
    TweenLite.to(".kr13-4", 1,  {
        css:{ opacity: 0 },
    })

)
.add(
    TweenLite.to(".kr13-5", 1,  {
        css:{ opacity: 0 },
    })

)
.add(
    TweenLite.to(".kr13-6", 1,  {
        css:{ opacity: 0 },

    })
)
.add(
    TweenLite.to(".kr13-8", 1,  {
        css:{ opacity: "1", animation: "shake 0.5s"
         },
    })
)
.add(
    TweenLite.to(".kr13-9", 1,  {
        css:{ opacity: 1, animation: "shake 0.5s"},

    })
);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.three',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween2)
.addIndicators()
.setPin('.three')
.addTo(controller)

const tween4 = new TimelineLite();

tween4.add(
    TweenLite.to(".s4-11-9", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-8", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-7", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-6-5", 1,  {
        css:{ opacity: 1},
    })
)
.add(
    TweenLite.to(".s4-4", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-3", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-2", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".s4-1", 1,  {
        css:{ opacity: 1 },
    })
)

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.four',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween4)
.addIndicators()
.setPin('.four')
.addTo(controller)