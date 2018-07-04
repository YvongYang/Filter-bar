import React, {Component} from 'react';
import {Input} from 'antd';

const Search = Input.Search;

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Search
        placeholder="Please input"
        onSearch={() => {}}
      />
    );
  }
}

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
