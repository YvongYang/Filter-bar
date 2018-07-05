import React, {Component} from 'react';
import FilterBar from './filter-bar.jsx';
import FilterBarInfo from './mock-data.js';

import '../../sass/style.scss';

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: FilterBarInfo.userinfo.context.confirmedCriteria
    };
  }

  render() {
    return(
      <FilterBar
        options={{}}
        criteria={this.state.criteria}
        onChange={() => {}}
      />
    );
  }
}

Playground.propTypes = {};

Playground.defaultProps = {};

export default Playground;
