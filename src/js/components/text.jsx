import React, {Component} from 'react';
import {Input, Dropdown, Menu, Icon, Button} from 'antd';

const Search = Input.Search;

class Text extends Component {
  constructor(props) {
    super(props);
  }

  renderMenu() {
    return (
      <Menu>
        <Menu.Item>
          <Search
            placeholder="Please input"
            onSearch={() => {}}
          />
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return(
      <Dropdown trigger={['click']} overlay={this.renderMenu()}>
        <a className="filter-bar__item-btn">
          <div className="filter-bar__item-btn__text-wrapper">
            <label className="filter-bar__item-btn__label">Text:</label>
            <span className="filter-bar__item-btn__text">AllAllAllAllAllAllAll</span>
          </div>
          <Icon
            className="filter-bar__item-btn__dropdown"
            type="down"
          />          
        </a>
      </Dropdown>
    );
  }
}

Text.propTypes = {};

Text.defaultProps = {};

export default Text;
