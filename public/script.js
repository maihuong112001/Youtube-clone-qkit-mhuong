const longText = document.querySelector('.long-text');
const readMoreBtn = document.querySelector('.read-more');

if (readMoreBtn) {
  readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    longText.style.webkitLineClamp = 'unset'; /* Bỏ giới hạn số dòng */
    readMoreBtn.style.display = 'none'; /* Ẩn nút xem thêm */
  });
  
}

const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  scrollbar:{
    hide:true
  },
  pagination: {
    clickable: true,

  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-previous',
  },
});