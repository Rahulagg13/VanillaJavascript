const btn = document.querySelector(".btn");
const length = document.querySelector(".length");
const breadth = document.querySelector(".breadth");
const rec = document.querySelector(".rec");
const area = document.querySelector(".area");
const prem = document.querySelector(".prem");
const valid = document.querySelector(".valid");
//class expression
const Rectangle = class {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  get Area() {
    return this.length * this.breadth;
  }
  get Perm() {
    return 2 * (this.length + this.breadth);
  }
  static isValid(r) {
    return r.length > 0 && r.breadth > 0;
  }
};

const handelSubmit = (event) => {
  console.log("Submited");
  let r = new Rectangle(parseInt(length.value), parseInt(breadth.value));
  valid.textContent = Rectangle.isValid(r);
  area.textContent = r.Area;
  prem.textContent = r.Perm;

  rec.style.width = `${breadth.value + "px"}`;
  rec.style.height = `${length.value + "px"}`;
};
btn.addEventListener("click", handelSubmit);
