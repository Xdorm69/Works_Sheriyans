const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline ()
tl.to("#yellow1" , {
    top:"-100%",
    delay: 0.5,
    duration:0.5,
    ease:"expo.out"

})
tl.from("#yellow2" , {
    top:"100%",
    delay: 0.6,
    duration:0.7,
    ease:"expo.out"
} , "anim")
tl.to("#loader h1" , {
    delay : 0.6,
    duration : 0.7,
    color: "black"
} , "anim")
tl.to("#loader" , {
    opacity : 0 ,
})
tl.to("#loader" , {
    display : "none" ,
})
 
var elems = document.querySelectorAll(".elem");
var box2 = document.querySelector("#box2")
elems.forEach(function(el){
    el.addEventListener("mouseenter", function(){
        var bgimg = el.getAttribute("data-img");
        box2.style.backgroundImage =`url(${bgimg})`
    })
})
document.querySelector("#footer h2").addEventListener("click" , function () {
    scroll.scrollTo(0);
})
document.querySelector("#img1").addEventListener("click" , () =>{
    window.location.assign("https://newsroom.porsche.com/en/2021/company/porsche-experience-center-tokyo-pec-25943.html");
})
document.querySelector("#img2").addEventListener("click" , () =>{
    window.location.assign("https://www.bbcgoodfood.com/howto/guide/top-50-picnic-recipes");
})
document.querySelector("#img3").addEventListener("click" , () =>{
    window.location.assign("https://www.tulips.com/category/tulips");
})
document.querySelector("#img4").addEventListener("click" , () =>{
    window.location.assign("https://www.timeout.com/newyork/things-to-do/summer-in-new-york");
})



document.querySelector("#img8").addEventListener("click" , () =>{
    window.location.assign("https://www.ea.com/en-gb/games/need-for-speed/need-for-speed-unbound");
})
document.querySelector("#img5").addEventListener("click" , () =>{
    window.location.assign("https://www.tripadvisor.ca/Restaurants-g297596-c8-Chandigarh.html");
})
document.querySelector("#img6").addEventListener("click" , () =>{
    window.location.assign("https://open.spotify.com/album/4qTtp9wYVgXnhf3mm6U64E");
})
document.querySelector("#img7").addEventListener("click" , () =>{
    window.location.assign("https://whc.unesco.org/en/list/394/");
})


document.querySelector("#img9").addEventListener("click" , () =>{
    window.location.assign("https://www.holidify.com/places/kasauli/");
})
document.querySelector("#img10").addEventListener("click" , () =>{
    window.location.assign("https://in.ign.com/india/171480/story/the-greatest-fights-in-anime-history");
})
document.querySelector("#img11").addEventListener("click" , () =>{
    window.location.assign("https://onepiece.fandom.com/wiki/Roronoa_Zoro");
})
document.querySelector("#img12").addEventListener("click" , () =>{
    window.location.assign("https://www.huffpost.com/entry/sea-adventure-stories_b_6466060");
})


