<template>
  <div class="index.vue">
    index.vue组件
  </div>
</template>
<script>
var _this;
import { mapActions,mapState } from "vuex";
export default {
  name: 'index.vue',
  components: {},
  data() {
    return {};
  },
  props: {
    prop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {  ...mapState({
    token: state => state.user.token,
    userId:state=>state.user.userId,
    coId:state=>state.user.coId,
    coManage:state=>state.user.coManage,
    sofId:state=>state.user.sofId,
  })},
  created() {
    _this=this;
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
