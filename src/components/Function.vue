<script>
export default {
  name: 'SpruceFunction',
  props: {
    fn: {
      type: Function,
      required: true,
    },
  },

  render() {
    return this.$scopedSlots.default({
      fn: this.fn,
    });
  },
};
</script>
