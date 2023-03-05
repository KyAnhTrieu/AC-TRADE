// showtotop
let items = document.querySelectorAll('#itemShowToTop');
document.addEventListener('scroll', (event)=>{
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 750){
            item.classList.add('active')
        };
        if(item.offsetTop - window.scrollY > 750){
            item.classList.remove('active')
        };
    });
});
// showtotop
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
$('.alert-50k').click(function() {
    alert('Đăng ký tài khoản trên nền tảng AC-Trade nhận ngay 50.000vnđ.');
});

