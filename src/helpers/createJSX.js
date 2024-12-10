export default (el, attrs, content) => {
  const node = document.createElement(el);

  Object.entries(attrs || {}).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });

  node.appendChild(typeof content === 'string' ? document.createTextNode(content) : content);

  return node;
};
