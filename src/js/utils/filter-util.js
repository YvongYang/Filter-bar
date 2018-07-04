import Text from '../components/text.jsx';

const FILTER_COMPONENT_MAPPING = {
  'text': Text
};

const FilterUtil = {
  deeplyCopy(obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch(e) {
      return null;
    }
  },
  getFilterComponent(type) {
    return FILTER_COMPONENT_MAPPING[type];
  }
};

export default FilterUtil;