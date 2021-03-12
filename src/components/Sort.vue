<script>
import sortArray from 'sort-array';

export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      default: 'asc',
      validator: value => ['asc', 'desc'].includes(value),
    },
    by: {
      default: '',
      type: String,
    },
  },

  computed: {
    results() {
      if (!this.list.length) return this.list;

      return sortArray([...this.list], { order: this.direction, by: this.by });
    },
  },

  render() {
    return this.$scopedSlots.default({
      results: this.results,
    });
  },
};
</script>
