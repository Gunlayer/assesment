const moveLeftContent = () => {
  const contentContainerEl = document.querySelector('.content-container');
  //const leftDest = contentContainerEl.getBoundingClientRect().left;
  const InitialWindowWidth = window.innerWidth;

  const resizeHandler = () => {
    const leftDest = contentContainerEl.getBoundingClientRect().left;
    console.log(leftDest);
    if (leftDest <= 0) {
      console.log(contentContainerEl.style.right);
      contentContainerEl.style.right = `${
        InitialWindowWidth - window.innerWidth
      }px`;
    }
  };

  window.addEventListener('resize', resizeHandler);
};
//moveLeftContent();
