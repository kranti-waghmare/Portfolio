// alert("script")

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: `-10`,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInout,
        duration:2,
        delay: -1,
        stagger: .2
        
    })

    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInout
    })

}
    
function circleflatkaro(){
    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientx - xprev;
        var ydiff = dets.clienty - yprev;

        xprev = dets.clientx;
        yprev = dets.clienty;

      console.log(gsap.utlis.clamp (.8,1.2, xdiff), gsap.utlis. clamp(.8,1.2, ydiff))   

    });
}



let cursor = document.querySelector("#minicricle")

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x - 7  + "px"
    cursor.style.top = dets.y - 7  + "px"
})

circleflatkaro();
firstPageAnim();

