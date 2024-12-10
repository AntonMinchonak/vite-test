const suka = () => {
  const div = document.createElement('div');

  div.textContent = 'CREATED DIV';
  div.style.color = 'red';
  div.style.background = 'blue';
  div.className = 'jopa';
  document.querySelector('body').append(div);
};

suka();

export default suka;

if (import.meta.hot) {
  import.meta.hot.accept((updatedModule) => {
    console.log(updatedModule);
  });

  import.meta.hot.dispose(() => {
    document.querySelector('.jopa').remove();
  });
}
