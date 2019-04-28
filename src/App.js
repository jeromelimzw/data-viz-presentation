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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    await this.renderMarkers();
  }

  renderMarkers = async () => {
    await this.setState({
      radius: levelArrayRandomized(),
      theta: thetaArray(),
      names: nameArray()
    });
  };

  handleToggle = (handle, event) => {
    this.setState({ [handle]: !this.state[handle] });
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
      isMarkerVisible
    } = this.state;
    const { handleToggle } = this;
    return (
      <div className="tc center mt5">
        <Grid columns="equal" divided>
          <Grid.Row>
            <Grid.Column width={6}>
              <Radar
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
              <Toggles handleToggle={handleToggle} />
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
