<script>
export default {
  name: 'SpruceEvent',
  props: {
    event: {
      type: String,
      required: true,
    },
    immediate: {
      default: false,
      type: Boolean,
    },
    outside: {
      default: false,
      type: Boolean,
    },
  },

  mounted() {
    this.handleEvent = this.handleEvent.bind(this);
    window.addEventListener(this.event, this.handleEvent);

    if (this.immediate) {
      window.dispatchEvent(new Event(this.event));
    }
  },

  /* istanbul ignore next */
  beforeDestroy() {
    window.removeEventListener(this.event, this.handleEvent);
  },

  methods: {
    handleEvent(e) {
      const slot = this.$slots.default?.[0];

      /* istanbul ignore next */
      if (!slot || e.target === window) {
        return this.$emit(this.event, e);
      }

      /* istanbul ignore next */
      if (this.outside) {
        return !slot?.elm?.contains(e.target) && this.$emit(this.event, e);
      }

      /* istanbul ignore next */
      slot?.elm?.contains(e.target) && this.$emit(this.event, e);
    },
  },

  render() {
    return this.$slots.default ?? null;
  },
};
</script>
