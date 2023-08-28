<script>
import Fuse from 'fuse.js';

export const THRESHOLD = 0.6;

export default {
  name: 'SpruceSearch',
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
    threshold: {
      type: Number,
      default: THRESHOLD,
    },
  },

  computed: {
    results() {
      if (!this.term || !this.list.length) return this.list;

      const first = this.list[0];
      const isObject = typeof first === 'object';
      const keys = isObject ? (this.keys.length ? this.keys : Object.keys(first)) : [];
      const fuse = new Fuse(this.list, {
        includeScore: false,
        shouldSort: false,
        threshold: this.threshold,
        keys,
      });

      return fuse.search(this.term).map(({ item }) => item);
    },
  },

  render() {
    return this.$slots.default({ results: this.results });
  },
};
</script>
