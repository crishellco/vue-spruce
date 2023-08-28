<script>
export default {
  name: 'SpruceAtLeast',
  props: {
    ms: {
      required: true,
      type: Number,
    },

    show: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {
      localShow: this.show,
      promise: null,
      disabled: false,
    };
  },

  watch: {
    show: {
      immediate: true,
      handler(newVal) {
        if (!newVal) {
          this.end();
        } else {
          this.start();
        }
      },
    },
  },

  methods: {
    end() {
      this.disabled = true;

      Promise.all([Promise.resolve(), this.promise]).then(() => {
        this.localShow = false;
        this.disabled = false;
      });
    },

    start() {
      this.localShow = true;
      this.promise = new Promise((resolve) => {
        setTimeout(resolve, this.ms);
      });
    },
  },

  render() {
    return this.$slots.default({ disabled: this.disabled, show: this.localShow });
  },
};
</script>
