//polaroidTop
const polaroidTopImgSqc = new Array();

for (let i = 1; i < 169; i++) {
    polaroidTopImgSqc.push(`./assets/images/polaroidtop${i}.webp`);
}
function preloading(polaroidToppreImgs) {
    let polaroidTopimgTotal = polaroidToppreImgs.length;
    for (let i = 0; i < polaroidTopimgTotal; i++) {
        let polaroidTopimg = new Image();
        polaroidTopimg.src = polaroidToppreImgs[i];
    }
}

preloading(polaroidTopImgSqc)

const polaroidTopimg = { polaroidTopcrntImg: 0 },
polaroidTopimgTag = document.querySelector('.polaroidtop');

let $tween_polaroidtop = TweenMax.to(polaroidTopimg, 1, {
    polaroidTopcrntImg: polaroidTopImgSqc.length - 1,
    roundProps: 'polaroidTopcrntImg',
    immediateRender: true,
    onUpdate: function () {
        polaroidTopimgTag.setAttribute('src', polaroidTopImgSqc[polaroidTopimg.polaroidTopcrntImg])
        const offsetY = "20%";
        polaroidTopimgTag.style.transform = `translateY(-${offsetY})`;
    }
});
const polaroidTopcontroller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: '#polaroidTop',
    triggerHook: 0
})
    .setTween($tween_polaroidtop)
    .setPin('.polaroidTop')
    .addTo(polaroidTopcontroller);

//lens
const lensImgSqc = new Array();

for (let i = 0; i < 82; i++) {
    lensImgSqc.push(`./assets/images/lens${i}.webp`);
}
function preloading(lenspreImgs) {
    let lensimgTotal = lenspreImgs.length;
    for (let i = 0; i < lensimgTotal; i++) {
        let lensimg = new Image();
        lensimg.src = lenspreImgs[i];
    }
}

preloading(lensImgSqc)

const lensimg = { lenscrntImg: 0 },
lensimgTag = document.querySelector('.lens');

let $tween_lens = TweenMax.to(lensimg, 1, {
    lenscrntImg: lensImgSqc.length - 1,
    roundProps: 'lenscrntImg',
    immediateRender: true,
    onUpdate: function () {
        lensimgTag.setAttribute('src', lensImgSqc[lensimg.lenscrntImg])
        const offsetY = "20%";
        lensimgTag.style.transform = `translateY(-${offsetY})`;
    }
});
const lenscontroller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    duration: 3600,
    triggerElement: '#polaroidFace',
    triggerHook: 0
})
    .setTween($tween_lens)
    .setPin('.polaroidFace')
    .addTo(lenscontroller);

//polaroidBack
const polaroidBackImgSqc = new Array();

for (let i = 0; i < 36; i++) {
    polaroidBackImgSqc.push(`./assets/images/polaroidBack${i}.webp`);
}
function preloading(polaroidBackpreImgs) {
    let polaroidBackimgTotal = polaroidBackpreImgs.length;
    for (let i = 0; i < polaroidBackimgTotal; i++) {
        let polaroidBackimg = new Image();
        polaroidBackimg.src = polaroidBackpreImgs[i];
    }
}

preloading(polaroidBackImgSqc)

const polaroidBackimg = { polaroidBackcrntImg: 0 },
polaroidBackimgTag = document.querySelector('.polaroidback');

let $tween_polaroidBack = TweenMax.to(polaroidBackimg, 1, {
    polaroidBackcrntImg: polaroidBackImgSqc.length - 1,
    roundProps: 'polaroidBackcrntImg',
    immediateRender: true,
    onUpdate: function () {
        polaroidBackimgTag.setAttribute('src', polaroidBackImgSqc[polaroidBackimg.polaroidBackcrntImg])
        const offsetY = "23%";
        polaroidBackimgTag.style.transform = `translateY(-${offsetY})`;
    }
});
const polaroidBackcontroller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    duration: 3600,
    triggerElement: '#polaroidBack',
    triggerHook: 0
})
    .setTween($tween_polaroidBack)
    .setPin('.polaroidBack')
    .addTo(polaroidBackcontroller);

//craft
const craftImgSqc = new Array();

for (let i = 0; i < 248; i++) {
    craftImgSqc.push(`./assets/images/craft${i}.webp`);
}
function preloading(craftpreImgs) {
    let craftimgTotal = craftpreImgs.length;
    for (let i = 0; i < craftimgTotal; i++) {
        let craftimg = new Image();
        craftimg.src = craftpreImgs[i];
    }
}

preloading(craftImgSqc)

const craftimg = { craftcrntImg: 0 },
craftimgTag = document.querySelector('.craft');

let $tween_craft = TweenMax.to(craftimg, 1, {
    craftcrntImg: craftImgSqc.length - 1,
    roundProps: 'craftcrntImg',
    immediateRender: true,
    onUpdate: function () {
        craftimgTag.setAttribute('src', craftImgSqc[craftimg.craftcrntImg])
        const offsetY = "23%";
        craftimgTag.style.transform = `translateY(-${offsetY})`;
    }
});
const craftcontroller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    duration: 2100,
    triggerElement: '#Craft',
    triggerHook: 0
})
    .setTween($tween_craft)
    .setPin('.Craft')
    .addTo(craftcontroller);
