var ui = 750;
// 自己设定的font值
var font = 50;
// 得到比例值
var ratio = ui/font;
var oHtml = document.documentElement;
var screenWidth = oHtml.offsetWidth;
// 初始的时候调用一次
getSize();
window.addEventListener('resize', getSize);
// 在resize的时候动态设置fontsize值
function getSize(){
  screenWidth = oHtml.offsetWidth;
  // 限制区间
  // if(screenWidth <= 320){
  //   screenWidth = 320;
  // }else if(screenWidth >= ui){
  //   screenWidth = ui;
  // }
  oHtml.style.fontSize = screenWidth/ratio + 'px';
}