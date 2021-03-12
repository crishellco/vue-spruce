<script>
import Fuse from 'fuse.js';

export default {
  props: {
    keys: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      required: true,
    },
    term: {
      type: String,
      default: '',
    },
  },

  computed: {
    results() {
      if (!this.term || !this.list.length) return this.list;

      const first = this.list[0];
      const isObject = typeof first === 'object';
      const keys = isObject ? (this.keys.length ? this.keys : Object.keys(first)) : [];
      const fuse = new Fuse(this.list, { includeScore: false, shouldSort: false, keys });

      return fuse.search(this.term).map(({ item }) => item);
    },
  },

  render() {
    return this.$scopedSlots.default({
      results: this.results,
    });
  },
};
</script>
