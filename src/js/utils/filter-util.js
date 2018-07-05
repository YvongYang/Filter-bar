import Text from '../components/text';
import SingleSelect from '../components/single-select';
import MultipleSelect from '../components/multiple-select';
import DateRange from '../components/date-range';
import TwoLayerSelect from '../components/twolayer-select';

const FILTER_COMPONENT_MAPPING = {
  'text': Text,
  'singleSelect': SingleSelect,
  'multipleSelect': MultipleSelect,
  'dateRange': DateRange,
  'twoLayerSelect': TwoLayerSelect
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