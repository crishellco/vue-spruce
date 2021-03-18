<script>
const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
};

const links = (currentPage, pageCount) => {
  const delta = 2;
  let range = [];

  for (let i = Math.max(2, currentPage - delta); i <= Math.min(pageCount - 1, currentPage + delta); i++) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    range.unshift('...');
  }
  if (currentPage + delta < pageCount - 1) {
    range.push('...');
  }

  range.unshift(1);
  range.push(pageCount);

  return range;
};

export default {
  name: 'SprucePaginate',
  props: {
    size: {
      type: Number,
      required: true,
    },

    list: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      pageIndex: 0,
    };
  },

  computed: {
    isFirst() {
      return this.pageIndex === 0;
    },

    isLast() {
      return this.pageNum === this.pages.length;
    },

    links() {
      return links(this.pageNum, this.pages.length);
    },

    pageNum() {
      return this.pageIndex + 1;
    },

    pages() {
      return chunk(this.list, this.size);
    },

    page() {
      return this.pages[this.pageIndex];
    },

    totalPages() {
      return this.pages.length;
    },

    rangeStart() {
      return this.page ? this.size * this.pageIndex + 1 : 0;
    },

    rangeEnd() {
      return this.page ? this.rangeStart + this.page.length - 1 : 0;
    },
  },

  watch: {
    size() {
      this.reset();
    },

    list() {
      this.reset();
    },
  },

  methods: {
    first() {
      this.pageIndex = 0;
    },

    go(pageNum) {
      this.pages[pageNum - 1] && (this.pageIndex = pageNum - 1);
    },

    last() {
      this.pageIndex = Math.max(this.totalPages - 1, 0);
    },

    next() {
      this.pageIndex = this.isLast ? this.pageIndex : this.pageIndex + 1;
    },

    prev() {
      this.pageIndex = this.isFirst ? this.pageIndex : this.pageIndex - 1;
    },

    reset() {
      this.pageIndex = 0;
    },
  },

  render() {
    return this.$scopedSlots.default({
      isFirst: this.isFirst,
      isLast: this.isLast,
      first: this.first,
      go: this.go,
      last: this.last,
      links: this.links,
      next: this.next,
      page: this.page,
      pageNum: this.pageNum,
      pages: this.pages,
      prev: this.prev,
      rangeEnd: this.rangeEnd,
      rangeStart: this.rangeStart,
      reset: this.reset,
      totalPages: this.totalPages,
    });
  },
};
</script>
