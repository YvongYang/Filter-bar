import React, {Component} from 'react';
import {} from 'antd';

class FilterBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>yang</h1>

        <div className="filter-bar">
          <div className="filter-bar__defaults">
            aaa
          </div>
          <div className="filter-bar__extends"></div>
        </div>
      </div>
    );
  }
}

FilterBar.propTypes = {};

FilterBar.defaultProps = {};

export default FilterBar;
