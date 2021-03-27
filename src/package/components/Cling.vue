<script>
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';

export default {
  name: 'SpruceCling',
  props: {
    modifiers: {
      default: () => [],
      type: Array,
    },

    placement: {
      default: 'auto',
      type: String,
    },
  },

  data() {
    return {
      popper: null,
    };
  },

  async mounted() {
    await this.$forceUpdate();

    const anchor = this.$el.querySelector('[spruce-cling-anchor]');
    const clinger = this.$el.querySelector('[spruce-cling-clinger]');
    const options = {
      modifiers: this.modifiers,
      placement: this.placement,
    };

    if (this.placement === 'auto') {
      options.modifiers.push(flip);
    }

    this.popper = createPopper(anchor, clinger, options);
  },

  methods: {
    update() {
      this.popper.update();
    },
  },

  render(h) {
    const props = {
      update: this.update,
    };
    /* istanbul ignore next */
    const anchor = this.$scopedSlots.anchor(props)[0];
    const anchorData = anchor.data || {};
    const anchorDataAttrs = anchorData.attrs || {};
    const clinger = this.$scopedSlots.clinger(props)[0];
    const clingerData = clinger.data || {};
    const clingerDataAttrs = clingerData.attrs || {};

    anchor.data = { ...anchorData, attrs: { ...anchorDataAttrs, 'spruce-cling-anchor': true } };
    clinger.data = { ...clingerData, attrs: { ...clingerDataAttrs, 'spruce-cling-clinger': true } };

    return h('div', [anchor, clinger]);
  },
};
</script>
