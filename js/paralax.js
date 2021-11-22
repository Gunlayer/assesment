const createParalaxEffect = () => {
  const profilerEl = document.querySelector('.profile-score');
  const developerEl = document.querySelector('.developer-quiz');
  const processEl = document.querySelector('.process');
  const questions = document.querySelector('.questions');

  const profilerDistance = { topLeft: 220, topRight: 140 };
  const developerDistance = { topLeft: 420, topRight: 420 };
  const processDistance = { topLeft: 290, topRight: 380 };
  const questionsDistance = { topLeft: 520, topRight: 520 };

  const setElementTop = (element, value) => {
    if (document.documentElement.clientWidth <= 1200) {
      element.style.top = `${element.getAttribute('topr')}px`;
      return value.topRight;
    } else {
      element.style.top = `${element.getAttribute('topl')}px`;
      return value.topLeft;
    }
  };

  const setElementAttribute = (element, value, speed) => {
    element.setAttribute('topl', `${speed + value.topLeft}`);
    element.setAttribute('topr', `${speed + value.topRight}`);
  };

  const resizeHandler = () => {
    const result = {
      leftTopEl: setElementTop(profilerEl, profilerDistance),
      leftBotEl: setElementTop(developerEl, developerDistance),
      rightTopEl: setElementTop(processEl, processDistance),
      rightBotEl: setElementTop(questions, questionsDistance),
    };

    return result;
  };

  const scrollHandler = () => {
    const speed = window.scrollY * 0.15;

    setElementAttribute(profilerEl, profilerDistance, speed);
    setElementAttribute(developerEl, developerDistance, speed);
    setElementAttribute(processEl, processDistance, speed);
    setElementAttribute(questions, questionsDistance, speed);

    profilerEl.style.top = `${speed + resizeHandler().leftTopEl}px`;
    developerEl.style.top = `${speed + resizeHandler().leftBotEl}px`;
    processEl.style.top = `${speed + resizeHandler().rightTopEl}px`;
    questions.style.top = `${speed + resizeHandler().rightBotEl}px`;
  };
  window.addEventListener('resize', resizeHandler);
  window.addEventListener('scroll', scrollHandler);
};

createParalaxEffect();
