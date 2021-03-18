<script>
import axios from 'axios';

export default {
  name: 'SpruceCrud',
  props: {
    url: {
      type: String,
      required: true,
    },

    method: {
      default: 'get',
      type: String,
    },

    immediate: {
      default: true,
      type: Boolean,
    },

    params: {
      default: () => ({}),
      type: Object,
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

    params: {
      handler() {
        this.reset();
      },

      deep: true,
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

      this.fetch();
    },

    fetch({ method, params } = {}) {
      return this.query(method || this.method, params || this.params);
    },

    async query(method, params) {
      if (this.loading) return;

      this.loading = true;

      try {
        const response = await axios({
          method,
          url: this.url,
          params,
        });

        this.data = response.data;
        this.error = null;
        this.$emit('success', { data: response, fetch: this.fetch });
      } catch (error) {
        this.data = null;
        this.error = error.response;
        this.$emit('error', { data: error, fetch: this.fetch });
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
