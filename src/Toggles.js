import React from "react";
import { Checkbox } from "semantic-ui-react";

const toggleNames = [
  { name: " Dividers", handle: "isDividerVisible" },
  { name: " Levels", handle: "isLevelVisible" },
  { name: " Markers", handle: "isMarkerVisible" },
  { name: " Circles", handle: "isCircleVisible" },
  { name: " Categories", handle: "isCategoryVisible" }
];

const Toggles = ({ handleToggle }) => {
  return (
    <div className="fixed w-20">
      <h1>Elements</h1>
      <div class=" dt mt7 center w-70">
        <div class="dtc tc ">
          {toggleNames.map((a, index) => (
            <div className="pv3 f3 flex justify-between">
              <label>{a.name}</label>
              <Checkbox
                key={index}
                onChange={() => handleToggle(a.handle)}
                toggle
                // defaultChecked
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toggles;
