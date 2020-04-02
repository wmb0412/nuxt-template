// template.js 组件模板文件
module.exports = {
  vueTemplate: componentName => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>
<script>
var _this;
import { mapActions,mapState } from "vuex";
export default {
  name: '${componentName}',
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
<style lang="scss" scoped>
.${componentName} {

}
</style>
`;
  },
  entryTemplate: `import Main from './main.vue';
export default Main;`
};
