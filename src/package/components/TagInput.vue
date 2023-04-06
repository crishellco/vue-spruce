<script>
export default {
  name: 'SpruceTagInput',
  props: {
    allowDuplicates: {
      type: Boolean,
      default: false,
    },

    allowPaste: {
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

    separator: {
      default: '\t',
      type: String,
    },

    validator: {
      default: () => true,
      type: Function,
    },

    value: {
      required: true,
      type: Array,
    },
  },

  data() {
    return { focusedTagIndex: null, newTag: '' };
  },

  computed: {
    invalid() {
      if (!this.newTag.length) return false;

      return !this.validator(this.newTag) || (!this.allowDuplicates && this.value.includes(this.newTag));
    },
  },

  watch: {
    newTag() {
      this.focusedTagIndex = null;
    },
  },

  methods: {
    add() {
      const tag = this.newTag.trim();

      if (this.invalid || tag.length === 0 || this.value.length === this.maxTags) {
        return;
      }

      this.$emit('input', [...this.value, tag]);
      this.newTag = '';
    },

    clear() {
      if (this.focusedTagIndex) return (this.focusedTagIndex = null);

      this.newTag = '';
    },

    paste(event) {
      if (!this.allowPaste) return;

      const text = event.clipboardData.getData('text');
      const tags = text.split(this.separator).filter((tag) => this.validator(tag));

      if (tags.length < 2) return;

      event.preventDefault();

      const payload = [...this.value, ...tags];

      this.$emit('input', !this.allowDuplicates ? [...new Set(payload)] : payload);
    },

    pop() {
      if (this.keepOnBackspace || this.newTag.length || !this.value.length) return;

      if (this.focusedTagIndex === null) return (this.focusedTagIndex = this.value.length - 1);

      this.remove(this.value[this.focusedTagIndex]);
      this.focusedTagIndex = null;
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
      focusedTagIndex: this.focusedTagIndex,
      invalid: this.invalid,
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
        paste: (e) => {
          this.paste(e);
        },
      },
      add: this.add,
    });
  },
};
</script>
