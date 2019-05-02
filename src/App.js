import React, { Component } from "react";
import {
  nameArray,
  levelArrayRandomized,
  thetaArray
} from "./utils/extractData";
import Toggles from "./Toggles";
import Code from "./Code";
import Radar from "./Radar";
import { Grid } from "semantic-ui-react";
const eight = require("./static/8cats");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: eight,
      radius: [],
      theta: [],
      names: [],
      isMarkerVisible: false,
      isLevelVisible: false,
      isDividerVisible: false,
      isCircleVisible: false,
      isCategoryVisible: false
    };
  }

  async componentDidMount() {
    await this.renderMarkers(this.state.data);
  }

  renderMarkers = async data => {
    await this.setState({
      radius: levelArrayRandomized(data),
      theta: thetaArray(data),
      names: nameArray(data)
    });
  };

  handleToggle = (handle, event) => {
    this.setState({ [handle]: !this.state[handle] });
  };

  handleDataSource = async (event, data) => {
    const selectedData = require(`./static/${data.value}cats`);
    await this.setState({ data: selectedData });
    await this.renderMarkers(this.state.data);
  };

  render() {
    const {
      radius,
      theta,
      names,
      isCategoryVisible,
      isCircleVisible,
      isDividerVisible,
      isLevelVisible,
      isMarkerVisible,
      data
    } = this.state;
    const { handleToggle, handleDataSource } = this;
    return (
      <div className="tc center mt5">
        <Grid columns="equal" divided>
          <Grid.Row>
            <Grid.Column width={6}>
              <Radar
                data={data}
                radius={radius}
                theta={theta}
                names={names}
                isCategoryVisible={isCategoryVisible}
                isCircleVisible={isCircleVisible}
                isDividerVisible={isDividerVisible}
                isLevelVisible={isLevelVisible}
                isMarkerVisible={isMarkerVisible}
              />
            </Grid.Column>
            <Grid.Column width={3} className="fixed">
              <Toggles
                handleToggle={handleToggle}
                handleDataSource={handleDataSource}
              />
            </Grid.Column>

            <Grid.Column>
              <Code
                isCategoryVisible={isCategoryVisible}
                isCircleVisible={isCircleVisible}
                isDividerVisible={isDividerVisible}
                isLevelVisible={isLevelVisible}
                isMarkerVisible={isMarkerVisible}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
