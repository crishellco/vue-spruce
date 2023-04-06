<script>
export default {
  name: 'SpruceTagInput',
  props: {
    value: {
      required: true,
      type: Array,
    },
  },

  data() {
    return { newTag: '' };
  },

  methods: {
    remove(tag) {
      this.$emit(
        'input',
        this.value.filter((t) => t !== tag)
      );
    },

    add() {
      const tag = this.newTag.trim();

      if (tag.length === 0 || this.value.includes(tag)) {
        return;
      }

      this.$emit('input', [...this.value, tag]);
      this.newTag = '';
    },
  },

  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      remove: this.remove,
      state: { value: this.newTag },
      events: {
        input: (e) => {
          this.newTag = e.target.value;
        },
        keydown: (e) => {
          // enter
          if (e.keyCode === 13) {
            e.preventDefault();
            this.add();
          }
          // esc
          if (e.keyCode === 27) {
            e.preventDefault();
            this.newTag = '';
          }
        },
      },
      add: this.add,
    });
  },
};
</script>
