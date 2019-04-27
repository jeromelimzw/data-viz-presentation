import React from "react";
const toggleNames = [
  { name: "Toggle Markers", handle: "isMarkerVisible" },
  { name: "Toggle Levels", handle: "isLevelVisible" },
  { name: "Toggle Dividers", handle: "isDividerVisible" },
  { name: "Toggle Circles", handle: "isCircleVisible" },
  { name: "Toggle Categories", handle: "isCategoryVisible" }
];

const Toggles = ({ handleToggle }) => {
  return (
    <div>
      {toggleNames.map((a, index) => (
        <button
          key={index}
          onClick={() => handleToggle(a.handle)}
          type="button"
        >
          {a.name}
        </button>
      ))}
    </div>
  );
};

export default Toggles;
