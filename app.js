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
.setPin('.animation')
.addTo(controller)