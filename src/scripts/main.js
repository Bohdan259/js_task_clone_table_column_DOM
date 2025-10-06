'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thead = document.querySelector('thead');
  const tfoot = document.querySelector('tfoot');
  const tbody = document.querySelector('tbody');

  function cloneColumn(section) {
    const trAll = Array.from(section.querySelectorAll('tr'));

    trAll.forEach((tr) => {
      if (tr.children.length > 1) {
        const clone = tr.children[1];
        const cell = clone.cloneNode(true);

        tr.insertBefore(cell, tr.children[tr.children.length - 1]);
      }
    });
  }

  cloneColumn(thead);
  cloneColumn(tfoot);
  cloneColumn(tbody);
});
