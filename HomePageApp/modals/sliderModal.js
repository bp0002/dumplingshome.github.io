/**
 * sliderModal.js
 * 实现轮播组件
 * 
 * 最多8张图片
 * 
 * 1.可切换上一张，下一张
 * 2.可指定 其中一张
 * 3.淡入淡出方式
 * 4.左右立方体滚动方式
 * 5.上下立方体滚动方式
 * 6.多叠片切换方式
 */
(function(modals){
  if(!modals) throw new Error("未获取到 组件管理器 modals");


  /**
   * 
   * @param {*} container 父容器：DOM对象
   * @param {*} imgArr  [["imgurl",...],]
   * @param {*} interval 延时时间
   * @param {*} option  选择动态效果：
   */
  function SliderModal(container, imgArr, interval, option){
    var option;
    if (!option) option = 0;
    this.typeCount = 1;

    if (!(container instanceof HTMLElement)) 
      throw new Error("SliderModal 构造函数第一参数应为 container 父容器DOM对象。");
    if (!(imgArr instanceof Array)) 
      throw new Error("SliderModal 构造函数第二参数应为 [ ['imgurl', ...],]数组。");
    if (parseInt(option) <0 || parseInt(option) > this.typeCount) 
      throw new Error("SliderModal 构造函数第三参数应为 0 到 "+ this.typeCount + " 正整数");

    this.container = document.createElement("div"); 
    this.container.className = "slidermodal";
    container.appendChild(this.container);
    this.option = parseInt(option);
    this.interval = interval;
    this.imgArr = imgArr;
    this.dataArrLen = imgArr.length;

    // 构建图片数据循环链表
    this.dataArr = [];
    var len = imgArr.length;
    for (var i=0; i<len; i++){
      var data = {};
      data.imgdata = imgArr[i];
      data.last = i-1;
      data.next = i+1;
      this.dataArr.push(data);
    }
    this.dataArr[0].last = len-1;
    this.dataArr[len-1].last = 0;


    switch(this.option){
      case 0:
        if (!!this.build_sp) this.build_sp();
        break;
      case 1:
        break;
      case 1:
        break;
      case 1:
        break;
    }
  }
  // 创建内容
  SliderModal.prototype.build = function(){
    this.cnt = document.createElement("div");
    this.cntFace = document.createElement("li");
    this.cntRight = document.createElement("li");
    this.cntLeft = document.createElement("li");
    this.cntBack = document.createElement("li");
    this.container.appendChild(this.cnt);
    this.cnt.appendChild(this.cntFace);
    this.cnt.appendChild(this.cntRight);
    this.cnt.appendChild(this.cntLeft);
    this.cnt.appendChild(this.cntBack);
  }

  // 切换 右图片
  SliderModal.prototype.setRight = function(){
    
  }
  // 切换 左图片
  SliderModal.prototype.setLeft = function(){
    
  }
  // 切换 后图片
  SliderModal.prototype.setBack = function(){
    
  }
  // 切换 前图片
  SliderModal.prototype.setFace = function(){
    
  }

  // 显示切换实现
  SliderModal.prototype.activeIndex = function(){

  }

  modals.SliderModal = SliderModal;
})(window.modals);