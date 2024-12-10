import './style/counter.scss';

import viteLogoRaw from 'public/vite.svg?raw';

import javascriptLogo from '@/images/javascript.svg';
import viteLogo from 'public/vite.svg';

import fakeHotAccept from './helpers/fake_for_hot_accept.js';
import hot_module_style_adder from './helpers/hot_module_style_adder.js';
import styleInline from './style/counter_inline.css?inline';

const modules = import.meta.glob('./helpers/*.js');
const modules1 = import.meta.glob('./helpers/*.js', { eager: true, import: 'default' });

Object.values(modules).forEach(async (module) => {
  // const result = await module();
  // result.default(document.querySelector('#counter'));
  // console.log('meta.glob', result.default);
});

// console.log('meta.glob import:default', modules1);

console.log(fakeHotAccept);
export default `
  <div class="counter">
    <style>${styleInline}</style>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      ${viteLogoRaw} <span class="fake-hot"> ${fakeHotAccept}</span> 
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="counter__title">Hello Vite!</h1>
    <div class="counter__card card">
      <button id="counter" type="button"></button>
    </div>
    <p class="counter__text read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const fakeHotEl = document.querySelector('pre');

// hot_module_style_adder();

if (import.meta.hot) {
  // import.meta.hot.on('suka1', (data) => {
  //   console.log(data);
  //   fakeHotEl.textContent = data.default;
  // });

  import.meta.hot.accept(['./helpers/fake_for_hot_accept.js'], ([fakeHot, styleDiv]) => {
    if (fakeHot) {
      console.log(fakeHot);
      fakeHotEl.textContent = fakeHot.default;
    }
    if (styleDiv) {
      // hot_module_style_adder();
    }
  });
}
