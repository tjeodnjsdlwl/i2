//.header .navigator
const gnbSlide = new Swiper('.header .swiper', {
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides:true,
    loop:true,
    // on: {
    //     slideChange: function () {
    //         const activeIndex = this.realIndex;

    //         if (activeIndex % this.params.slidesPerView === 2) {
    //             $('.header .swiper-slide').removeClass('act');
    //             $('.header .swiper-slide').eq(activeIndex).addClass('act');
    //         } else {
    //             $('.header .swiper-slide').removeClass('act');
    //         }
    //     }
    // }
});

const headerUpper = document.querySelector('.header .header-upper');
const headerNavigator = document.querySelector('.header .navigator');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerUpper.style.transform = 'translateY(-100%)';
        headerNavigator.style.transform = 'translateY(-100%)';
    } else {
        headerUpper.style.transform = 'translateY(0)';
        headerNavigator.style.transform = 'translateY(0)';
    }
});

const shopSlide = new Swiper('.sc-shop .swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
})
// ScrollTrigger.matchMedia({
//      // small
//   "(max-width: 767px)": function() {
// const shopSlide = new Swiper('.sc-shop .swiper', {
//     spaceBetween: 20,
//     slidesPerView: 1,
// })
// },
// });

//.sc-reveal
gsap.to('.sc-reveal .group-info .revealtxt',{
    scrollTrigger:{
        trigger:".sc-reveal",
        start:"0% 100%", 
        end:"100% 100%",
        scrub:0,
        markers:true,
    },
    'background-position-x': '0%'
})

//.sc-polaroidTop
gsap.set('.sc-polaroidTop .polaroidTop .group-desc .desc-wrap',{opacity:0})
gsap.to('.sc-polaroidTop .polaroidTop .group-desc .desc-wrap',{
    scrollTrigger:{
        trigger:".sc-polaroidTop",
        start:"60% 0%", 
        end:"100% 50%",
        scrub:0,
    },
    opacity:1,
})

gsap.to('.sc-polaroidTop .polaroidTop .left-light',{
    scrollTrigger:{
        trigger:".sc-polaroidTop",
        start:"0% 0%", 
        end:"100% 50%",
        scrub:0,
    },
    transform:"translateX(-18.7316%) translateY(70.2435%) rotate(46.829deg) translateZ(0px)"
})

gsap.to('.sc-polaroidTop .polaroidTop .right-light',{
    scrollTrigger:{
        trigger:".sc-polaroidTop",
        start:"0% 0%", 
        end:"100% 50%",
        scrub:0,
    },
    transform:"translateX(-8.0974%) translateY(-46.829vh) rotate(-46.829deg) translateZ(0px)"
})

//.sc-photoTypes
gsap.to('.sc-photoTypes .group-photos .photos.kotori',{
    scrollTrigger:{
        trigger:".sc-photoTypes",
        start:"0% 0%", 
        end:"30% 50%",
        scrub:0,
    },
    y:'-150%'
})
gsap.set('.sc-photoTypes .group-photos .photos.max',{opacity:0.2})
gsap.to('.sc-photoTypes .group-photos .photos.max',{
    scrollTrigger:{
        trigger:".sc-photoTypes",
        start:"0% 0%", 
        end:"30% 50%",
        scrub:0,
    },
    opacity:'1'
})
gsap.to('.sc-photoTypes .group-photos .photos.max',{
    scrollTrigger:{
        trigger:".sc-photoTypes",
        start:"30% 0%", 
        end:"70% 90%",
        scrub:0,
    },
    y:'-150%'
})
gsap.to('.sc-photoTypes .group-photos .photos.coco',{
    scrollTrigger:{
        trigger:".sc-photoTypes",
        start:"30% 0%",
        end:"70% 100%",
        scrub:0,
    },
    opacity:'1'
})

gsap.to('.sc-photoTypes .group-photos .photos.coco .group-image',{
    scrollTrigger:{
        trigger:".sc-photoTypes",
        start:"60% 0%",
        end:"90% 100%",
        scrub:0,
    },
    transform:'rotate(2deg)'
})

//.sc-polaroidFace
// gsap.set('.sc-polaroidFace .inner .polaroidFace .desc-wrap',{opacity:0})
gsap.to('.sc-polaroidFace .inner .polaroidFace .desc-wrap',{
    scrollTrigger:{
        trigger:".sc-polaroidFace",
        start:"0% 0%", 
        end:"30% 100%",
        scrub:0,
    },
    opacity:1,
    // onEnterBack: () => {
    //     gsap.to('.sc-polaroidFace .inner .polaroidFace .desc-wrap', { opacity: 0 });
    // },
})
// gsap.to('.sc-polaroidFace .inner .polaroidFace .desc-wrap',{
//     scrollTrigger:{
//         trigger:".sc-polaroidFace",
//         start:"30% 0%", 
//         end:"50% 30%",
//         scrub:0,
//         markers:true,
//     },
//     ease:'none',
//     opacity:0,
// })

//.sc-craftLight
const craftLightTl = gsap.timeline()
gsap.set('.sc-craftLight .group-img .area-img',{transform:'translate(-100%, 110%) scale(3.6) rotate(0deg)',filter:'blur(5px)'})
gsap.set('.sc-craftLight .group-desc',{opacity:1,filter:'blur(0px)'})
gsap.set('.sc-craftLight .group-text',{opacity:0})

craftLightTl
.to('.sc-craftLight .group-img .area-img',{
    transform:'translate(-30%, 70%) scale(1) rotate(-2deg)',
    filter:'blur(0px)',
  },'a')
.to('.sc-craftLight .group-desc',{
    filter:'blur(5px)',
    opacity:0,
  },'a')
.to('.sc-craftLight .group-text',{
    opacity:1,
    transform:'translate(-28%, 0%)',
  },'b')
  ScrollTrigger.create({
    animation: craftLightTl,
    trigger: ".sc-craftLight",
    start: "top 0%", 
    end: "70% 100%",
    scrub: 0,
});
//.sc-Film
const filmTl = gsap.timeline()
gsap.set('.sc-Film .group-film .group-img .img-wrap',{transform:'translate(0%, 20%) scale(1) rotate(-2deg)'})
filmTl
.to('.sc-Film .group-film .group-img .img-wrap',{
    transform:'translate(0%, -50%)',
  },'a')
.to('.sc-Film .group-film .group-img .img-wrap .bg',{
    opacity:0
  },'b')
.to('.sc-Film .group-film .group-img .img-wrap',{
  transform:'scale(3.9) rotate(0deg)',
},'b')
  ScrollTrigger.create({
    animation: filmTl,
    trigger: ".sc-Film",
    start: "top 0%", 
    end: "70% 100%",
    scrub: 0,
});



ScrollTrigger.create({
  trigger: ".sc-polaroidFace .inner .Polaroid-desc p",
  start: "0% 100%", 
  end: "100% 100%",
  markers:true,
  onEnter:function(){
    gsap.to('.sc-polaroidFace .inner .polaroidFace .desc-wrap',{
        opacity:0
    })
  },
  onLeaveBack:function(){
    gsap.to('.sc-polaroidFace .inner .polaroidFace .desc-wrap',{
        opacity:1
    })
  }
});

// $(document).ready(function() {
//     $('.group-thumnail .thumnail-area .img-wrap .videoBtn').hover(
//       function() {
//         $(this).find('.group-thumnail .thumnail-area .playBtn .icon-wrap .initial').css('opacity', '0');
//         $(this).find('.group-thumnail .thumnail-area .playBtn .icon-wrap .active').css('opacity', '1');
//       },
//       function() {
//         $(this).find('.group-thumnail .thumnail-area .playBtn .icon-wrap .initial').css('opacity', '1');
//         $(this).find('.group-thumnail .thumnail-area .playBtn .icon-wrap .active').css('opacity', '0');
//       }
//     );
//   });