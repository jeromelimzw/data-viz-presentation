const data = require("../static/2018");
const _ = require("lodash");

const getCategories = () => {
  const categories = data[0].categories.map(a => a.category);
  return categories;
};

const oneAngle = () => {
  return 360 / getCategories().length;
};

const getNames = () => {
  return data.map(a => a.name);
};

const nameArray = () => {
  const arr = [];
  getNames().forEach(function(element) {
    _.times(getCategories().length, () => arr.push(element));
  });
  return arr;
};

const categoriesAngleArray = () => {
  const arr = [0];
  for (let i = 1; i < getCategories().length; i++) {
    arr.push(oneAngle() * i);
  }
  return arr;
};

const levelArray = () => {
  const arr = data.map(a => a.categories.map(a => parseInt(a.level)));
  return _.flatten(arr);
};

const levelArrayRandomized = () => {
  const radius = [];
  levelArray().forEach(function(element) {
    switch (element) {
      case 1:
        radius.push(_.random(0.7, 1.8));
        break;
      case 2:
        radius.push(_.random(2.3, 3.2));
        break;
      case 3:
        radius.push(_.random(3.5, 4.5));
        break;
      case 4:
        radius.push(_.random(5, 5.8));
        break;
      default:
        radius.push();
    }
  });
  return radius;
};

const thetaArraySingle = () => {
  return getCategories().map((a, index) =>
    _.random(index * oneAngle() + 10, (index + 1) * oneAngle() - 10)
  );
};

const thetaArray = () => {
  const arr = [];
  data.forEach(function(element) {
    arr.push(thetaArraySingle());
  });
  return _.flatten(arr);
};

module.exports = {
  nameArray,
  thetaArray,
  categoriesAngleArray,
  getCategories,
  levelArrayRandomized,
  oneAngle
};
