<script>
export default {
  name: 'SpruceEvent',
  props: {
    event: {
      type: String,
      required: true,
    },
    outside: {
      default: false,
      type: Boolean,
    },
  },

  mounted() {
    this.handleEvent = this.handleEvent.bind(this);
    window.addEventListener(this.event, this.handleEvent);
  },

  /* istanbul ignore next */
  beforeDestroy() {
    window.removeEventListener(this.event, this.handleEvent);
  },

  methods: {
    handleEvent(e) {
      const slot = this.$slots.default?.[0];

      /* istanbul ignore next */
      if (!slot) {
        return this.$emit(this.event);
      }

      /* istanbul ignore next */
      if (this.outside) {
        return !slot?.elm?.contains(e.target) && this.$emit(this.event);
      }

      /* istanbul ignore next */
      slot?.elm?.contains(e.target) && this.$emit(this.event);
    },
  },

  render() {
    return this.$slots.default ?? null;
  },
};
</script>
