<script>
export default {
  name: 'SpruceWatch',

  props: {
    watch: {
      required: true,
      type: Object,
    },
  },

  data() {
    return { unwatchers: [] };
  },

  async mounted() {
    await this.$nextTick();

    /* istanbul ignore next */
    this.unwatchers.forEach(unwatch => unwatch);
    this.unwatchers = [];

    for (const key in this.watch) {
      this.unwatchers.push(
        this.$watch(`watch.${key}`, (oldValue, newValue) => {
          this.$emit(`changed:${key}`, {
            oldValue,
            newValue,
          });
          this.$emit(`changed`, {
            key,
            oldValue,
            newValue,
          });
        })
      );
    }
  },

  render() {
    return this.$scopedSlots.default();
  },
};
</script>
