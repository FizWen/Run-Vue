<template>
    <div class="paper run-slider" :class="showSlider ? '' : 'hide-slider' ">
        <div class="mu-appbar leftbar">
            <a class="left" href="/">
              <img src="../assets/images/logo2.png" class="logo"/>
              <span class="logo-text">Run-Vue</span>
              <em class="beta">Beta</em>
            </a>
            <div class="mu-appbar-title"></div>
            <div class="right"></div>
        </div>

        <div class="version slider-content">
          <span class="slider-title">Version:</span>
          <div class="select-down select-content">
              <span class="text-color">Vue : </span>2.1.0
          </div>
        </div>

        <!--如何使用-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="startData">
            </slide-tree>
        </ul>
        <!--个性定制-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="customizeData">
            </slide-tree>
        </ul>
        <!--基础组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="baseCptData">
            </slide-tree>
        </ul>

        <!--表单组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="fromCptData">
            </slide-tree>
        </ul>

        <!--功能组件-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="funcCptData">
            </slide-tree>
        </ul>

        <!--关于我们-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="abouUs">
            </slide-tree>
        </ul>

        <!--更多信息-->
        <ul class="useUl">
            <slide-tree
                class="item"
                :model="moreInfo">
            </slide-tree>
        </ul>

        <cp-select :title=" '关于我们' " :to=" '/about' " :plus="true"></cp-select>
        <hr class="divider">
        <cp-list :texts=" aboutUsText "></cp-list>
        <cp-list :texts=" aboutUsText "></cp-list>
    </div>

</template>

<script>
import SlideTree from '../slide-tree/slide-tree'
import cpSelect from '../cp-select/cp-select'
import cpList from '../cp-list/cp-list'
export default {
    name: 'slide',
    data: function () {
        return {
            moreInfoText: [{name: 'Source', eName: 'source'}],
            aboutUsText: [{name: '开发组成员', eName: 'team'}],

            startData: {
                name: '如何使用',
                router: '/use',
                children: [
                    {name: '开始', router: '/use/start'},
                    {name: '使用教程', router: '/use/base'},
                    {name: '如何开发', router: '/use/dev'},
                    {name: '文档资源', router: '/use/resource'}
                ]
            },
            customizeData: {
                name: '个性定制',
                router: '/customize',
                children: [
                    {name: '一键换肤', router: '/customize/skin'},
                    {name: '选择主题', router: '/customize/theme'}
                ]
            },
            baseCptData: {
                name: '基础组件',
                router: '/base',
                children: [
                    {name: 'Layout 栅格', router: '/base/layout'},
                    {name: 'Color 色彩', router: '/base/color'},
                    {name: 'Typography 字体', router: '/base/typography'},
                    {name: 'Icon - loading', router: '/base/icon'},
                    {name: 'Button', router: '/base/button'}
                ]
            },
            fromCptData: {
                name: '表单组件',
                router: '/from',
                children: [
                    {name: 'Checkbox ', router: '/from/checkbox'},
                    {name: 'Radio ', router: '/from/radio'},
                    {name: 'Input ', router: '/from/input'},
                    {name: 'Input-password ', router: '/from/password'},
                    {name: 'Input-search ', router: '/from/search'},
                    {name: 'Textarea ', router: '/from/textarea'},
                    {name: 'Switch ', router: '/from/switch'},
                    {name: 'Select ', router: '/from/select'}
                ]
            },
            funcCptData: {
                name: '功能组件',
                router: '/func',
                children: [
                    {name: 'Talble', router: '/from/checkbox'},
                    {name: 'Swipe', router: '/from/checkbox'},
                    {name: 'DatePicker', router: '/from/checkbox'},
                    {name: 'Toast', router: '/from/checkbox'},
                    {name: 'Modal', router: '/from/checkbox'},
                    {name: 'Progress', router: '/from/checkbox'},
                    {name: 'BackTop', router: '/from/checkbox'},
                    {name: 'Lazy load', router: '/from/checkbox'}
                ]
            },
            abouUs: {
                name: '关于我们',
                router: '/about',
                children: [
                    {name: '开发者', router: '/about/dev'}
                ]
            },
            moreInfo: {
                name: '项目进度以及版本',
                router: '/pm',
                children: [
                    {name: '开发者', router: '/pm/version'}
                ]
            }
        }
    },
    components: {
        'cp-select': cpSelect,
        'cp-list': cpList,
        'slide-tree': SlideTree
    },
    computed: {
        showSlider () {
            return this.$store.state.showSlider
        }
    },
    methods: {
        test () {
            this.$store.dispatch('getShow')
        }
    }
}
</script>

<style lang="less">
@import "../assets/less/mixins.less";
.paper {
  /*transition: all .45s @easeOutFunction;*/
  color: #666;
  background-color: #fff;
  .depth(2);
}

i{
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
} 

.run-slider {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  border-radius: 0;
  left: 0;
  /*visibility: hidden;*/
  z-index: 200;
  overflow: auto;
  overflow-scrolling: touch;
  .no-scrollbar
}

.hide-slider {
  display: none;
}

.divider{
    margin: 0;
    height: 1px;
    border: none;
    background-color: rgba(0,0,0,.12);
    width: 100%;
}

.logo{
  width: 50px;
  height: 50px;
}

.logo-text{
  font-size: 24px;
  margin-left: 24px;
  text-align: center;
  display: inline-block;
}

.text-color{
  color: #03a9f4;
}

.slider-content{
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
  align-items: center;
  display: flex;
  width: 100%;
}

.slider-content  .slider-title{
    font-size: 16px;
    margin-top: 8px;
}

.select-down{
    display: inline-block;
    font-size: 15px;
    height: 48px;
    position: relative;
    transition: all .45s cubic-bezier(.23,1,.32,1);
    cursor: pointer;
    overflow: hidden;
}
.select-content{
    margin-left: 16px;
    margin-right: 16px;
    line-height: 56px;
    font-size: 16px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.87);
    padding-left: 8px;
}

.version{
  height: 48px;
}
.beta{
  margin-left: 28px;
  font-size: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: #bdbdbd;
  color: #03a9f4;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
}

.mu-paper-round {
  border-radius: 2px;
}

.mu-paper-circle {
  border-radius: 50%;
}

/*.mu-paper-1 {
  .depth(1);
}

.mu-paper-2 {
  .depth(2);
}

.mu-paper-3 {
  .depth(4);
}

.mu-paper-4 {
  .depth(4);
}

.mu-paper-5 {
  .depth(5);
}*/
</style>
