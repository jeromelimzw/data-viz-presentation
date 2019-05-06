import React from "react";
import { Checkbox, Dropdown, Menu } from "semantic-ui-react";

const toggleNames = [
  { name: " Circles", handle: "isCircleVisible" },
  { name: " Levels", handle: "isLevelVisible" },
  { name: " Dividers", handle: "isDividerVisible" },
  { name: " Categories", handle: "isCategoryVisible" },
  { name: " Markers", handle: "isMarkerVisible" }
];

const selectOptions = [
  { text: "one", value: 1 },
  { text: "two", value: 2 },
  { text: "three", value: 3 },
  { text: "four", value: 4 },
  { text: "five", value: 5 },
  { text: "six", value: 6 },
  { text: "seven", value: 7 },
  { text: "eight", value: 8 },
  { text: "nine", value: 9 },
  { text: "ten", value: 10 }
];

const Toggles = ({ handleToggle, handleDataSource }) => {
  return (
    <Menu className="fixed" secondary stackable>
      <Menu.Item>
        {toggleNames.map((a, index) => (
          <div className="pa2 f4" key={index}>
            <label>
              {a.name}
              <br />
              <Checkbox
                key={index}
                onChange={() => handleToggle(a.handle)}
                toggle
              />
            </label>
          </div>
        ))}
      </Menu.Item>
      <Menu.Item>
        <label>
          No of Categories
          <br />
          <Dropdown
            options={selectOptions}
            onChange={handleDataSource}
            placeholder="choose one"
            selection
            defaultValue="eight"
          />
        </label>
      </Menu.Item>
    </Menu>
  );
};

export default Toggles;
