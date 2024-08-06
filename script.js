document.addEventListener('DOMContentLoaded', () => {
  const accordianItems = document.querySelectorAll('.accordian-item');

  accordianItems.forEach((item) => {
    const title = item.querySelector('.accordian-title');

    title.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      if (!isActive) {
        item.classList.add('active');
        title.querySelector('img').src = './assets/images/icon-minus.svg';
      } else {
        item.classList.remove('active');
        title.querySelector('img').src = './assets/images/icon-plus.svg';
      }
    });
  });
});
