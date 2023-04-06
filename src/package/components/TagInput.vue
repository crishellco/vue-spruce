<script>
export default {
  name: 'SpruceTagInput',
  props: {
    allowDuplicates: {
      type: Boolean,
      default: false,
    },

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
    return { focusedTag: null, newTag: '' };
  },

  watch: {
    newTag() {
      this.focusedTag = null;
    },
  },

  methods: {
    add() {
      const tag = this.newTag.trim();
      const valueIsAllowed = this.allowDuplicates || !this.value.includes(tag);

      if (tag.length === 0 || !valueIsAllowed || this.value.length === this.maxTags) {
        return;
      }

      const payload = {
        next: () => {
          this.$emit('input', [...this.value, tag]);
          this.newTag = '';
        },
        tag,
      };
      if (this.$listeners.validate) return this.$emit('validate', payload);

      payload.next();
    },

    clear() {
      if (this.focusedTag) return (this.focusedTag = null);

      this.newTag = '';
    },

    pop() {
      if (this.keepOnBackspace || this.newTag.length || !this.value.length) return;

      if (!this.focusedTag) return (this.focusedTag = this.value.at(-1));

      this.remove(this.focusedTag);
      this.focusedTag = null;
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
      focusedTag: this.focusedTag,
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
            this.clear();
          }
        },
      },
      add: this.add,
    });
  },
};
</script>
