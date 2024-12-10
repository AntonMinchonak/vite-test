import '@/style.css';

import { collect } from 'collect.js';

import setupCounter from 'components/Counter/helpers/counter.js';
import sum from 'helpers/sum.ts';

import Counter from 'components/Counter/Counter.js';
import styleModule from 'components/Counter/style/counter_module.module.css';
import JSXSample from 'components/JSXSample/JSXSample.jsx';

import products from './products.csv';

console.log(import.meta.env, import.meta.env.VITE_ANTON_VARIABLE);
document.querySelector('#app').innerHTML = `
  <div>
    ${Counter}
    ${JSXSample.outerHTML}
   
  </div>
`;

console.log(collect([1, 3, 7, 4, 5]).avg());
console.log(sum(2, 7, 8, 9));

setupCounter(document.querySelector('#counter'));
document.querySelector('.counter__title').className += ` ${styleModule.jopa}`;

document.querySelector('pre').textContent = JSON.stringify(products);
if (import.meta.hot) {
    import.meta.hot.on('csv-update', (data) => {
        console.log(data);
        document.querySelector('pre').textContent = JSON.stringify(data.data);
    });

    import.meta.hot.on('connected', (data) => {
        console.log(data);
    });

    import.meta.hot.send('ping', { suka: 'asd' });
    import.meta.hot.on('pong', (data) => {
        console.log(data);
    });
}
