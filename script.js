document.querySelectorAll('#colors span').forEach((elm) => {
    elm.onclick = function () {
      const color = elm.dataset.color;
      document.querySelectorAll('#fsection, #ssection, #tsection').forEach(section => {
        section.style.backgroundColor = color;
      });
    };
  });