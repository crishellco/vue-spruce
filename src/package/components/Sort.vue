<script>
import orderBy from 'lodash.orderby';

export const sort = (list, sortKey, sortDirection) => {
  return orderBy(list, [(listItem) => sortKeyFn(listItem, sortKey)], sortDirection);
};

export const sortKeyFn = (listItem, sortKey) => {
  const value = listItem[sortKey];

  return typeof value === 'string' ? value.toLowerCase() : value;
};

export default {
  name: 'SpruceSort',
  props: {
    list: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      default: 'asc',
      validator: (value) => ['asc', 'desc'].includes(value),
    },
    by: {
      default: '',
      type: String,
    },
  },

  computed: {
    // @vuese
    results() {
      if (!this.list.length) return this.list;

      return sort(this.list, this.by, this.direction);
    },
  },

  watch: {
    results(results) {
      this.$emit('change', results);
    },
  },

  render() {
    return this.$scopedSlots.default({ results: this.results });
  },
};
</script>
