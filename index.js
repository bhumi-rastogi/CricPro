let x = document.querySelector('#seh');
let B1 = document.querySelector('#B1');
B1.addEventListener('click', function () {
  x.style.display = 'block';
  x.style.transform = 'translate(6em,-22em)';
  x.onmouseleave = () => {
    x.style.display = 'none';
  };
});

let y = document.querySelector('#sac');
let B2 = document.querySelector('#B2');
B2.addEventListener('click', function () {
  y.style.display = 'block';
  y.style.transform = 'translate(6em,-22em)';
  y.onmouseleave = () => {
    y.style.display = 'none';
  };
});

let z = document.querySelector('#gam');
let B3 = document.querySelector('#B3');
B3.addEventListener('click', function () {
  z.style.display = 'block';
  z.style.display = 'translate(6em,-22em)';
  z.onmouseleave = () => {
    z.style.display = 'none';
  };
});
