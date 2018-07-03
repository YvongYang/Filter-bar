import React, {Component} from 'react';
import FilterBar from './filter-bar.jsx';
import FilterBarInfo from '../filter-bar/mock-data.js';

import '../../../sass/style.scss';

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
        criteria={this.state.criteria}
      />
    );
  }
}

Playground.propTypes = {};

Playground.defaultProps = {};

export default Playground;
