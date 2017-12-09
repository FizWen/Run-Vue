<template>
    <div class="main-info" id="start">
        <h2>search 搜索</h2>
        <p class="mark-p">基本组件-搜索，一般用于表单搜索。</p>
        <div class="codebox">
            <div class="codetitle">
                <span>基础用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">基本使用, 搜索按钮为图标，颜色，大小可自定义</span>
                    <ui-search v-model="value1" placeholder="请输入您要搜索的内容" @search="search1" icon="search">
                    </ui-search>
                    <p>您输入了：{{value1}}</p>
                    <p v-show="searchStatus1">您点击了搜索1</p>
                </div>
                <div class="codeabout">
                    <span class="spa">基本使用，搜索按钮为文字，默认2个字，如果超过2个字，需自定义样式</span>
                    <ui-search v-model="value2" placeholder="请输入您要搜索的内容" @search="search2" searchText="搜索">
                    </ui-search>
                    <p>您输入了：{{value2}}</p>
                    <p v-show="searchStatus2">您点击了搜索2</p>
                </div>
                <div class="codeabout">
                    <span class="spa">自定义样式，可以用style或者class定义</span>
                    <ui-search v-model="value3" placeholder="请输入您要搜索的内容" searchText="搜索" style="width:300px;">
                    </ui-search>
                    <p>您输入了：{{value3}}</p>
                </div>
            </div>
        </div>
        <div class="codebox">
            <div class="codetitle">
                <span>返回事件用法</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <span class="spa">获取焦点时，按下键盘enter键触发事件</span>
                    <ui-search v-model="value4" placeholder="请输入您要搜索的内容" @on-enter="inputEnter" icon="search">
                    </ui-search>
                    <p>您输入了：{{value4}}</p>
                    <p v-show="enterStatus">您搜索时按下了enter键，返回值为“ {{enterStatus}} ”</p>
                </div>
            </div>
        </div>


        <h2>Code</h2>
        <p class="mark-p">组件实现的代码 （ 其中包括了 html、less、js ） </p>
        <div class="codebox">
            <div class="codetitle">
                <span>Code</span>
            </div>
            <div class="codecontent">
                <div class="codeabout">
                    <codeBlock :code="codeSearch"></codeBlock>
                </div>
            </div>
        </div>
        <h2>API</h2>
        <p class="mark-p">我们提供了基本的API ( 里面主要包括了 props、 slot、 event ) </p>
        <table class="api-table" style="margin-bottom:20px;">
            <thead>
                <tr>
                    <td>属性</td>
                    <td>说明</td>
                    <td>类型</td>
                    <td>可选值</td>
                    <td>默认值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>value</td>
                    <td>搜索框的值</td>
                    <td>String || Number</td>
                    <td>——</td>
                    <td>none</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>搜索框占位文字</td>
                    <td>String</td>
                    <td>——</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>输入框搜索按钮图标</td>
                    <td>String</td>
                    <td>none</td>
                    <td>search</td>
                </tr>
            </tbody>
        </table> 
        <table class="api-table" >
            <thead>
                <tr>
                    <td>事件</td>
                    <td>说明</td>
                    <td>返回值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>search</td>
                    <td>搜索按钮点击时触发事件</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-enter</td>
                    <td>搜索框获得焦点，键盘按下enter键时触发</td>
                    <td>value</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
    import uiSearch from '../components/form/search'
    import codeBlock from '../components/codeBlock'
    import codeSearch from '!raw!../components/form/search'

    export default {
        name: 'start',
        components: {
            uiSearch,
            codeBlock
        },
        data () {
            return {
                codeSearch,
                value1: '',
                value2: '',
                value3: '',
                value4: '',

                searchStatus1: false,
                searchStatus2: false,
                enterStatus: ''
            }
        },
        methods: {
            search1 () {
                this.searchStatus1 = true
            },
            search2 () {
                this.searchStatus2 = true
            },
            inputEnter (value) {
                this.enterStatus = value
            }
        }
    }

</script>
<style lang="less">
    h2 {
        margin: 0;
        padding-bottom: .3em;
        font-size: 1.7em;
        line-height: 1.334;
        border-bottom: 1px solid #eee;
    }
    
    .mark-p {
        font-size: 1.2em;
        border-left: 6px solid #eee;
        padding-left: 10px;
        margin: 30px auto;
    }
    
    .codebox {
        margin-top: 12px;
        margin-bottom: 40px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
        .codetitle {
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 56px;
            padding: 0 24px;
            background-color: #e8e8e8;
            cursor: pointer;
            span {
                padding-right: 16px;
                line-height: 56px;
                font-size: 20px;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: rgba(0, 0, 0, .54);
            }
        }
        .codecontent {
            font-size: 1.2em;
        }
        .codeabout {
            overflow: auto;
            padding: 10px 20px 0;
            margin: 0;
            padding-bottom: 20px;
            .spa {
                display: block;
                margin-bottom: 20px;
            }
        }
        .codetable{
            padding: 20px;
            table{
                width:100%;
                border: 1px solid #cccccc;
                th{
                    line-height: 40px;
                    font-size: 18px;
                    font-weight: normal;
                    text-align: center;
                    background: #eeeeee;
                    border: none;
                    border-right: 1px solid #cccccc;
                }
                td{
                    border: none;
                    border-top: 1px solid #cccccc;
                    border-right: 1px solid #cccccc;
                    text-align: center;
                    font-size: 14px;
                    line-height: 40px;
                }
            }
        }
    }

</style>
