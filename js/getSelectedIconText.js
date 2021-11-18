const getSelectedIconText = () => {
  const icons = document.querySelectorAll('.icon');
  const textContainer = document.querySelector('.text-box');
  const eventHandler = (event) => {
    const selectedIcon = event.target;
    switch (selectedIcon.className.baseVal) {
      case 'icon dev':
        textContainer.innerText = 'Development';
        break;
      case 'icon analysis':
        textContainer.innerText = 'Analysis';
        break;
      case 'icon arch':
        textContainer.innerText = 'Architecture';
        break;
      case 'icon test':
        textContainer.innerText = 'Testing';
        break;
      case 'icon manage':
        textContainer.innerText = 'Project management';
        break;

      default:
        textContainer.innerText = '';
        break;
    }
  };

  icons.forEach((item) => {
    item.addEventListener('mouseenter', eventHandler);
    item.addEventListener('mouseleave', () => (textContainer.innerText = ''));
  });
};
getSelectedIconText();
