//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika tentang wisata di klik
document.querySelector('#tentang-wisata').onclick = () => {
navbarNav.classList.toggle('active')
};

//klik di luar sidebar untuk menghilangkan Nav
const tentang = document.querySelector('#tentang-wisata');

document.addEventListener('click', function(e) {
if(!tentang.containts(e.target)&&!navbarNav.contains(e.target)) {
navbarNav.classList.remove('active');
 }
});