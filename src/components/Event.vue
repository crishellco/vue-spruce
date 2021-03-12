<script>
export default {
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

  beforeDestroy() {
    window.removeEventListener(this.event, this.handleEvent);
  },

  methods: {
    handleEvent(e) {
      const slot = this.$slots?.default?.[0];

      if (!slot) {
        return this.$emit(this.event);
      }

      if (this.outside) {
        return !slot?.elm?.contains(e.target) && this.$emit(this.event);
      }

      slot?.elm?.contains(e.target) && this.$emit(this.event);
    },
  },

  render() {
    return this.$slots.default ?? null;
  },
};
</script>
