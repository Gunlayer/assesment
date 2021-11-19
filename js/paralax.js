const createParalaxEffect = () => {
  const profilerEl = document.querySelector('.profile-score');
  const developerEl = document.querySelector('.developer-quiz');
  const processEl = document.querySelector('.process');
  const questions = document.querySelector('.questions');

  const getInitialTop = (element) => {
    const top = window.getComputedStyle(element).top;
    const result = top.split('').filter((item) => !isNaN(item));
    return +result.join('');
  };
  const topProfiler = getInitialTop(profilerEl);
  const topDev = getInitialTop(developerEl);
  const topProces = getInitialTop(processEl);
  const topQuestions = getInitialTop(questions);

  const scrollHandler = () => {
    profilerEl.style.top = `${window.scrollY * 0.06 + topProfiler}px`;
    developerEl.style.top = `${window.scrollY * 0.09 + topDev}px`;
    processEl.style.top = `${window.scrollY * 0.07 + topProces}px`;
    questions.style.top = `${window.scrollY * 0.08 + topQuestions}px`;
  };

  window.addEventListener('scroll', scrollHandler);
};
createParalaxEffect();
