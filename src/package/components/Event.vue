<script>
export const UPDATED = 'updated';

export default {
  name: 'SpruceEvent',

  props: {
    eventName: {
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

  emits: [UPDATED],

  mounted() {
    this.handleEvent = this.handleEvent.bind(this);
    window.addEventListener(this.eventName, this.handleEvent);

    if (this.immediate) {
      window.dispatchEvent(new Event(this.eventName));
    }
  },

  /* istanbul ignore next */
  beforeDestroy() {
    window.removeEventListener(this.eventName, this.handleEvent);
  },

  methods: {
    handleEvent(e) {
      const slot = this.$slots.default?.[0];

      /* istanbul ignore next */
      if (!slot || e.target === window) {
        return this.$emit(UPDATED, e);
      }

      /* istanbul ignore next */
      if (this.outside) {
        return !slot?.elm?.contains(e.target) && this.$emit(UPDATED, e);
      }

      /* istanbul ignore next */
      slot?.elm?.contains(e.target) && this.$emit(UPDATED, e);
    },
  },

  render() {
    return this.$slots.default ? this.$slots.default() : null;
  },
};
</script>
