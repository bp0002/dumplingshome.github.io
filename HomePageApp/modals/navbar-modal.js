/**
 * navbar-modal.js
 * 
 * **依赖angular**
 * 
 * 0.0.0 2017-11-21
 * 导航栏组件
 *    动态生成
 *        默认指向首页
 *    点击切换指向，切换到对应页面
 *    当前指向有特殊效果，同时可点击，点击时刷新页面
 *    
 */
(function(modals){

  if(!modals) throw new Error("NavBarModa 未获取到 window.modals");
  // if(!ngapp) throw new Error("NavBarModa 未获取到 window.ngapp");
  /**
  * NavBarModal构造函数
  * @param {*} container 父容器DOM对象
  * @param {*} opt 导航数组
  * @param {*} activeIndex 设置活动状态项
  * @param {*} isHoriz 水平排列
  * [ ["title", "href"],]
  */
  function NavBarModal(container, opt, activeIndex, isHoriz){
    var temp = parseInt(activeIndex);

    this.isHoriz = isHoriz;
    if (isHoriz == undefined) this.isHoriz = true;
    if (this.isHoriz == false) this.isHoriz = false;

    this.container = container;
    this.navArr = opt;
    this.navArrLen = opt.length;
    if (!(container instanceof HTMLElement)) throw new Error("NavBarModal 构造函数第一参数应为 container 父容器DOM对象。");
    if (!(opt instanceof Array)) throw new Error("NavBarModal 构造函数第二参数应为 [ ['title', 'href'],]数组。");
    if (temp <0 || temp >= this.navArrLen) throw new Error("NavBarModal 构造函数第三参数应为 0到小于数组长度的正整数");
    this.render(temp);
  }
  // 导航元素渲染
  NavBarModal.prototype.render = function(index){

    var ul = document.createElement("ul");
    if (this.isHoriz) {
      ul.className = "navbarmodal";
    }else{
      ul.className = "navbarmodal-v";
    }
    this.container.appendChild(ul);

    for (var i=0; i<this.navArrLen; i++ ){
      var li = document.createElement("li");
      var a = document.createElement("a");
      
      a.innerText = this.navArr[i][0];
      a.href = this.navArr[i][1];
      a.className = "";
      if (i==index) {
        li.className = "active";
      }

      li.appendChild(a);
      ul.appendChild(li);
    }
  }

  modals.NavBarModal = NavBarModal;
})(window.modals);