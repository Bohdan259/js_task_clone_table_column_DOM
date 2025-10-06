'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thead = document.querySelector('thead');
  const tfoot = document.querySelector('tfoot');
  const tbody = document.querySelector('tbody');

  function addColumn(section) {
    const tr = section.querySelector('tr');
    const th = document.createElement('th');
    const clone = tr.children[1].textContent;

    th.textContent = clone;
    tr.insertBefore(th, tr.children[4]);
  }

  function cloneColumn(section) {
    const trAll = Array.from(section.querySelectorAll('tr'));

    trAll.forEach((tr) => {
      const clone = tr.children[1];
      const td = clone.cloneNode(true);

      tr.insertBefore(td, tr.children[tr.children.length - 1]);
    });
  }

  addColumn(thead);
  addColumn(tfoot);
  cloneColumn(tbody);
});
