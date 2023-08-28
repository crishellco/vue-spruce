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
    return this.$slots.default({ fn: this.fn });
  },
};
</script>
