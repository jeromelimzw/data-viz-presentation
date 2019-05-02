const _ = require("lodash");

const getCategories = data => {
  const categories = data[0].categories.map(a => a.category);
  return categories;
};

const oneAngle = data => {
  return 360 / getCategories(data).length;
};

const getNames = data => {
  return data.map(a => a.name);
};

const nameArray = data => {
  const arr = [];
  getNames(data).forEach(function(element) {
    _.times(getCategories(data).length, () => arr.push(element));
  });
  return arr;
};

const categoriesAngleArray = data => {
  const arr = [0];
  for (let i = 1; i < getCategories(data).length; i++) {
    arr.push(oneAngle(data) * i);
  }
  return arr;
};

const levelArray = data => {
  const arr = data.map(a => a.categories.map(a => parseInt(a.level)));
  return _.flatten(arr);
};

const levelArrayRandomized = data => {
  const radius = [];
  levelArray(data).forEach(function(element) {
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

const thetaArraySingle = data => {
  return getCategories(data).map((a, index) =>
    _.random(index * oneAngle(data) + 10, (index + 1) * oneAngle(data) - 10)
  );
};

const thetaArray = data => {
  const arr = [];
  data.forEach(function(element) {
    arr.push(thetaArraySingle(data));
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
