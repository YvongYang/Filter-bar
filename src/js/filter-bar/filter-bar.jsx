import React, {Component} from 'react';
import FilterUtil from '../utils/filter-util';
import FilterItem from './filter-item';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {},
      filterCtrl: FilterUtil.deeplyCopy(this.props.criteria)
    };
  }

  renderFilterItems(filterItems = []) {
    return filterItems.map(f => {
      let FilterComponent = FilterUtil.getFilterComponent(f.type);
      let value = this.state.filter[f.name] || null;
      let options = f.options || this.options;
      let wrapperClassName = options && options[f.type] && options[f.type].wrapperClassName || null;

      return (
        <FilterItem className={wrapperClassName} key={f.name} removable={!f.isDefault} onRemove={() => {}}>
          <FilterComponent
            value={value}
            onChange={() => {}}
          />
        </FilterItem>
      );
    });
  }

  render() {
    return(
      <div>
        <h1>Filter Bar</h1>

        <div className="filter-bar">
          <div className="filter-bar__defaults">
            <ul className="filter-bar__lists">
              {this.renderFilterItems(this.state.filterCtrl.filter(f => f.isDefault))}
            </ul>
          </div>
          <div className="filter-bar__extends">
            <ul className="filter-bar__lists">
              {this.renderFilterItems(this.state.filterCtrl.filter(f => !f.isDefault))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

FilterBar.propTypes = {};

FilterBar.defaultProps = {};

export default FilterBar;
