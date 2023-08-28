<script>
export default {
  name: 'SpruceState',

  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  emits: ['input'],

  data() {
    return { localValue: null };
  },

  watch: {
    localValue(newVal) {
      this.$emit('input', newVal);
    },

    value(newVal) {
      this.set(newVal);
    },
  },

  beforeMount() {
    this.localValue = this.value;
  },

  methods: {
    set(newVal) {
      this.localValue = {
        ...this.localValue,
        ...newVal,
      };
    },

    update(newVal) {
      console.warn(
        `The 'update' method has been dreprecated and will be remove in the next major version. Please use 'set' instead.`
      );

      this.set(newVal);
    },
  },

  render() {
    return this.$slots.default({
      ...this.localValue,
      set: this.set,
    });
  },
};
</script>
