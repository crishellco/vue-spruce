<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },

  watch: {
    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    },

    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.localValue = newVal;
      }
    },
  },

  methods: {
    update(newVal) {
      this.$set(this, 'localValue', newVal);
    },
  },

  render() {
    return this.$scopedSlots.default({
      state: this.localValue,
      update: this.update,
    });
  },
};
</script>
