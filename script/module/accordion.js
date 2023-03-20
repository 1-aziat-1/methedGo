const items = document.querySelectorAll('.faq__item');
const itemsBtn = document.querySelectorAll('.faq__item-btn');
const itemsWrapper = document.querySelectorAll('.faq__item-wrapper');
const itemsImg = document.querySelectorAll('.faq__item::after');
console.log(itemsImg);

let heightWrapper = 0;
itemsWrapper.forEach(item => {
  if (heightWrapper < item.scrollHeight) {
    heightWrapper = item.scrollHeight;
  }
});

itemsBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        console.log(heightWrapper);
        itemsWrapper[i].style.height = items[i].classList.contains('faq__active') ? 
        '' : `${heightWrapper}px`;
        items[i].classList.toggle('faq__active');
      } else {
        itemsWrapper[i].style.height = '';
        items[i].classList.remove('faq__active');
      }
    }
  });
})