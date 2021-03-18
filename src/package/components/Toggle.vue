<script>
export default {
  name: 'SpruceToggle',
  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },

  watch: {
    localValue(newVal) {
      this.$emit('input', newVal);
    },

    value(newVal) {
      this.localValue = newVal;
    },
  },

  methods: {
    on() {
      this.localValue = true;
    },

    off() {
      this.localValue = false;
    },

    toggle() {
      this.localValue = !this.localValue;
    },
  },

  render() {
    return this.$scopedSlots.default({
      isOn: this.localValue,
      on: this.on,
      off: this.off,
      toggle: this.toggle,
    });
  },
};
</script>
