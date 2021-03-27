<script>
export default {
  name: 'SpruceFetch',
  props: {
    url: {
      type: String,
      required: true,
    },

    immediate: {
      default: true,
      type: Boolean,
    },
  },

  data() {
    return {
      data: null,
      error: null,
      loading: false,
      calls: 0,
    };
  },

  watch: {
    url() {
      this.reset();
    },
  },

  mounted() {
    this.immediate && this.fetch();
  },

  methods: {
    reset() {
      this.calls = 0;
      this.data = null;
      this.error = null;
      this.loading = false;

      return this.fetch();
    },

    async fetch() {
      if (this.loading) return;

      this.loading = true;

      try {
        const response = await fetch(this.url, { method: 'GET' });
        const data = await response.json();

        if (response.ok) {
          this.data = data;
          this.error = null;
          this.$emit('success', {
            data: response,
            fetch: this.fetch,
          });
        } else {
          this.data = null;
          this.error = {
            data,
            status: response.status,
          };
          this.$emit('error', {
            data: response,
            fetch: this.fetch,
          });
        }
      } catch (error) {
        this.data = null;
        this.$emit('error', {
          data: error,
          fetch: this.fetch,
        });
      }

      this.calls++;
      this.loading = false;
    },
  },

  render() {
    return this.$scopedSlots.default({
      calls: this.calls,
      data: this.data,
      error: this.error,
      loading: this.loading,
      fetch: this.fetch,
    });
  },
};
</script>
