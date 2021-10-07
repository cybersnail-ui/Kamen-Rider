const flightPath = {
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
);

/* second section */

const tween2 = new TimelineLite();

tween2.add(
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

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation', '.kr-13')
.addTo(controller)

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.kr13',
    duration: 1000,
    triggerHook: 0,
})
.setTween(tween2)
.addIndicators()
.setPin('.kr13')
.addTo(controller)
