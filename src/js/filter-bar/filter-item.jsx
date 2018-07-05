import React, {Component} from 'react';

class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive
    };

    this.inactive = this.inactive.bind(this);
  }

  inactive() {
    this.setState({
      isActive: !this.state.isActive
    });

    this.props.onRemove(this.props.name);
  }

  renderRemoveButton() {
    return this.props.removable ? (
      <span className="filter-bar__item-close" onClick={this.inactive}>
        <i className="otms otms-close filter-bar__item-close-btn" />
      </span>
    ) : null;
  }

  render() {
    return(
      <li className={this.props.className || 'filter-bar__item'}>
        {this.props.children}
        {this.renderRemoveButton()}
      </li>
    );
  }
}

FilterItem.propTypes = {};

FilterItem.defaultProps = { 
  className: '',
  removable: true,
  onRemove: () => {}
};

export default FilterItem;
