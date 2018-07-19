import React, {Component} from 'react';
import FilterBar from './filter-bar.jsx';
import FilterBarInfo from './mock-data.js';
import FilterUtil from '../utils/filter-util';

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
        default={FilterUtil.deeplyCopy(this.state.criteria)}
        criteria={FilterUtil.deeplyCopy(this.state.criteria)}
        onChange={() => {}}
      />
    );
  }
}

Playground.propTypes = {};

Playground.defaultProps = {};

export default Playground;
