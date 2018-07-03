import React, {Component} from 'react';
import FilterBar from './filter-bar.jsx';
import FilterBarInfo from '../filter-bar/mock-data.js';

import '../../../sass/style.scss';

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: FilterBarInfo.userinfo.contegit config --global user.email "你的邮件地址"
      git config --global user.name "你的Github用户名"xt.confirmedCriteria
    };
  }

  render() {
    return(
      <div>
        <h1>Test</h1>
        <FilterBar 
          criteria={this.state.criteria}
        />
      </div>
    );
  }
}

Playground.propTypes = {};

Playground.defaultProps = {};

export default Playground;
