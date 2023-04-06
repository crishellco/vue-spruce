<script>
export default {
  name: 'SpruceTagInput',
  props: {
    keepOnBackspace: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    maxTags: {
      default: null,
      type: Number,
    },

    value: {
      required: true,
      type: Array,
    },
  },

  data() {
    return { newTag: '' };
  },

  methods: {
    add() {
      const tag = this.newTag.trim();

      if (tag.length === 0 || this.value.includes(tag) || this.value.length === this.maxTags) {
        return;
      }

      this.$emit('input', [...this.value, tag]);
      this.newTag = '';
    },

    pop() {
      if (this.keepOnBackspace || this.newTag.length || !this.value.length) return;

      const tags = this.value;

      tags.pop();
      this.$emit('input', tags);
    },

    remove(tag) {
      if (this.disabled) return;

      this.$emit(
        'input',
        this.value.filter((t) => t !== tag)
      );
    },
  },

  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      remove: this.remove,
      state: { disabled: this.disabled, value: this.newTag },
      events: {
        input: (e) => {
          this.newTag = e.target.value;
        },
        keydown: (e) => {
          // backspace
          if (e.keyCode === 8) {
            this.pop();
          }
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
