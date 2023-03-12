// showToTop
let items = document.querySelectorAll('#itemShowToTop');
document.addEventListener('scroll', (event)=>{
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 750){
            item.classList.add('active')
        };
        if(item.offsetTop - window.scrollY > 850){
            item.classList.remove('active')
        };
    });
});
// showToTop
//hide-show password
const input = document.querySelector(".password");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function () {
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type", "password");
});
eyeClose.addEventListener("click", function () {
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type", "text");
});
//hide-show password
// slides
var mySlide = 0;
carousel();

function carousel() {
    var i;
    var mySlide = document.getElementsByClassName("mySlide");
    for (i = 0; i < mySlide.length; i++) {
      mySlide[i].classList.remove("active"); // Xóa class active khỏi tất cả các phần tử slide
    }
    mySlide++;
    if (mySlide > mySlide.length) {mySlide = 1}    
    mySlide[mySlide-1].classList.add("active"); // Thêm class active vào phần tử slide hiện tại
    setTimeout(carousel, 4000);
};
// slides
