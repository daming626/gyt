import React, {Component} from 'react';
import Taro from "@tarojs/taro";
import {View,Image} from "@tarojs/components";
import {AtButton} from "taro-ui"
import './welcomPhysical.less'
// import {APIBASEURL,BASEURL} from "../../constants/global";

//体质辨识欢迎界面
class WelcomPhysical extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      num:0,
      openid:''
    }
  }
  componentDidMount () {
    //获取体质测评题目
    Taro.request({
      url: APIBASEURL+'/selectTestNumByUsercode',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          num: res.data.data
        })
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });

    Taro.getStorage({
      key: 'openid',
      success:(res)=> {
        this.setState({
          openid:res.data.openid
        })
      }
    })

  }

  //跳转到体质测试界面
  toPhyIdentity(){
    if(this.state.openid){
    Taro.navigateTo({url: '/pages/physicalIdentity/physicalTest'})
    }else{
      Taro.navigateTo({url: '/pages/myRecord/wxLogin'})
    }
  }

  render() {
    return (
      <View>
        {/*体质辨识欢迎页面头部at-row 是行 at-col是列 */}
        <View className='at-row at-row--wrap wel-head'>
          <View className='at-col at-col-8'>
            <View className='at-row wel-phy-text'>
              <text className='at-col-5 wel-phy-title'>中医治未病</text>
              <text className='at-col-5 wel-phy-title'>辨质识养生</text>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                {/*<Image className='phy-icon' src={`${BASEURL}phy-icon.png`} />*/}
                <text className='wel-phy-span'>情志调摄</text>
              </View>
              <View className='at-col-5 wel-phy-content'>
                {/*<Image className='phy-icon' src={`${BASEURL}phy-icon.png`} />*/}
                <text className='wel-phy-span'>饮食调养</text>
              </View>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                {/*<Image className='phy-icon' src={`${BASEURL}phy-icon.png`} />*/}
                <text className='wel-phy-span'>起居调摄</text>
              </View>
              <View className='at-col-5 wel-phy-content'>
                {/*<Image className='phy-icon' src={`${BASEURL}phy-icon.png`} />*/}
                <text className='wel-phy-span'>运动保健</text>
              </View>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                {/*<Image className='phy-icon' src={`${BASEURL}phy-icon.png`} />*/}
                <text className='wel-phy-span'>穴位保健</text>
              </View>
            </View>
          </View>
          <View className='at-col at-col-4 wel-head-right'>
          </View>
        </View>
        {/*  体质辨识评估参与人数*/}
        <View className='phy-num'>
          <View className='at-row phy-num-content'>
            <View className='at-col-8 at-col__offset-1 '>
              <View>
                <text className='phy-identity-num'>{this.state.num}</text>
                <text className='phy-num-text'>人</text>
              </View>
              <View className='phy-num-text'>已参与体质辨识评估</View>
            </View>
            <View className='at-col-3'>
              {/*<Image className='phy-num-icon' src={`${BASEURL}phy-num1.png`} />*/}
              {/*<Image className='phy-num-icon' src={`${BASEURL}phy-num2.png`} />*/}
            </View>
          </View>
        </View>

        {/*  体质辨识内容*/}
        <View className='phy-identity'>
          <View className='phy-identity-content'>
            <text className='phy-identity-text'>中医体质辨识软件是判断中医体质分类的标准化工具，依据中华中医药学会《中医体质分类与判定》标准开发。软件是在中医体质理论指导下，根据量表设计原理，以问询录入的方式，采集居民健康信息；通过对9种体质分值的结果分析，来判断体质类型。</text>
          </View>
          <View className='at-row at-col-12 '>
            <AtButton className='at-col-10 phy-btn ' onClick={this.toPhyIdentity.bind(this)}>开始评估</AtButton>
          </View>
        </View>

        {/*  体质辨识提示*/}
        <View className=' phy-notice'>
          <View className='at-row phy-notice-content'>
            <View className='at-col-1'>
              {/*<Image className='phy-notice-icon'src={`${BASEURL}warn.png`} />*/}
            </View>
            <View className='at-col-11 phy-notice-text'>
              由于测评题目比较多，按照正常语速完成测评需要至少<text className='phy-notice-warn'>5</text>分钟时间，请您合理安排体质辨析测评时间；
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomPhysical
