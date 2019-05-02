import React from "react";
import { Checkbox, Dropdown } from "semantic-ui-react";

const toggleNames = [
  { name: " Dividers", handle: "isDividerVisible" },
  { name: " Levels", handle: "isLevelVisible" },
  { name: " Markers", handle: "isMarkerVisible" },
  { name: " Circles", handle: "isCircleVisible" },
  { name: " Categories", handle: "isCategoryVisible" }
];

const selectOptions = [
  { text: "one", value: 1 },
  { text: "two", value: 2 },
  { text: "three", value: 3 },
  { text: "four", value: 4 },
  { text: "five", value: 5 },
  { text: "six", value: 6 },
  { text: "seven", value: 7 },
  { text: "eight", value: 8 }
];

const Toggles = ({ handleToggle, handleDataSource }) => {
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
              />
            </div>
          ))}
          <div className="f3 mt4">
            <label>Number of Categories:</label>

            <Dropdown
              options={selectOptions}
              onChange={handleDataSource}
              className="mv3"
              placeholder="choose one"
              selection
              defaultValue="eight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggles;
