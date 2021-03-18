<script>
export default {
  name: 'SpruceState',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      localValue: null,
    };
  },

  watch: {
    localValue(newVal) {
      this.$emit('input', newVal);
    },

    value(newVal) {
      this.$set(this, 'localValue', newVal);
    },
  },

  beforeMount() {
    this.$set(this, 'localValue', this.value);
  },

  methods: {
    update(newVal) {
      this.$set(this, 'localValue', { ...this.localValue, ...newVal });
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
