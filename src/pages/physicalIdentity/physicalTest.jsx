import React, {Component} from 'react';
import {Image, View} from "@tarojs/components";
import { AtButton }  from 'taro-ui'
import Taro from "@tarojs/taro";
import ToggleButton from "./toggleButton";
import './physicalTest.less'
// import {APIBASEURL,BASEURL} from "../../constants/global";

//体质辨识测评
class PhysicalTest extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      answers:[],
      Tcmquestions:[],
      answerItem:{
        userId:'',
        qid:'',
        qoption:'',
        tcmRemark:'',
        typeId:'',
        seq:'',
        useflag:''
      },
      answerItems:[],
      tz_result:{},
      tzTendency: [],
      tzDetermine:[],
      resultItemcode:'',
      anscount:0
    }

  }

  componentDidMount () {
    Taro.showLoading({
      title:'测评题目加载中'
    })
    //获取体质测评题目
    Taro.request({
      url: `${APIBASEURL}/selectKnowledgeTcmQuestions`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          Tcmquestions: res.data.data
        })

        setTimeout(function () {
          //题目回显，隐藏loading提示框,设定定时器，让显示更加自然
          Taro.hideLoading();
        },1500)
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }

  //从按钮获取结果
  getChildrenMsg(result,quesNum,quesId,answerOption,answerValue,answerType){
    Taro.getStorage({
      key: '__itemcode__',
      success:(res)=> {
        let ans = [...this.state.answers];
        let answerItems = [...this.state.answerItems];
        const usercode=res.data;
        let answerItem = {
          userId:usercode,
          qid:quesId,
          qoption:answerValue,
          typeId:answerType,
          seq:quesId,
          useflag:'有效'
        };

        let tz_result = {
          userId:usercode
        };
        //重复点击替换原来的
        let ifAdd = true;
        answerItems.forEach(function (item,index) {
          if(item.qid === answerItem.qid){
            answerItems.splice(index, 1, answerItem);
            ifAdd = false;
          }
        });

        if(ifAdd){
          answerItems.push(answerItem);
        }
        ans[quesNum] = answerValue;
        this.setState({
          answers:ans,
          answerItems:answerItems,
          tz_result:tz_result
        })
      }
    })

  }

  calculPhysicalType(answers){

    let qixz = 0;// 气虚质
    let yangxz = 0;// 阳虚质
    let yinxz = 0;// 阴虚质
    let tansz = 0;// 痰湿质
    let shirz = 0;// 湿热质
    let xueyz = 0;// 血瘀质
    let qiyz = 0;// 气郁质
    let tebz = 0;// 特禀质
    let pinghz = 0;// 平和质
    answers.forEach(function (item,index) {
      let answer = parseInt(item);
      switch (index+1) {
        case 1:
          pinghz += answer;
          break;
        case 2:
          qixz += answer;
          let ping1 = 5-answer+1;
          pinghz += ping1;
          break;
        case 3:
          qixz += answer;
          break;
        case 4:
          qixz += answer;
          let ping2 = 5-answer+1;
          pinghz += ping2;
          break;
        case 5:
          qiyz += answer;
          let ping3 =5-answer+1;
          pinghz += ping3;
          break;
        case 6:
          qiyz += answer;
          break;
        case 7:
          qiyz += answer;
          break;
        case 8:
          qiyz += answer;
          break;
        case 9:
          tansz += answer;
          break;
        case 10:
          yinxz += answer;
          break;
        case 11:
          yangxz += answer;
          break;
        case 12:
          yangxz += answer;
          break;
        case 13:
          yangxz += answer;
          let ping4 = 5-answer+1;
          pinghz += ping4;
          break;
        case 14:
          qixz += answer;
          break;
        case 15:
          tebz += answer;
          break;
        case 16:
          tansz += answer;
          break;
        case 17:
          tebz += answer;
          break;
        case 18:
          tebz += answer;
          break;
        case 19:
          xueyz += answer;
          break;
        case 20:
          tebz += answer;
          break;
        case 21:
          yinxz += answer;
          break;
        case 22:
          xueyz += answer;
          break;
        case 23:
          shirz += answer;
          break;
        case 24:
          xueyz += answer;
          break;
        case 25:
          shirz += answer;
          break;
        case 26:
          yinxz += answer;
          break;
        case 27:
          shirz += answer;
          break;
        case 28:
          tansz += answer;
          break;
        case 29:
          yangxz += answer;
          break;
        case 30:
          shirz += answer;
          break;
        case 31:
          yinxz += answer;
          break;
        case 32:
          tansz += answer;
          break;
        case 33:
          xueyz += answer;
          break;
      }
    });
    console.log("气虚质"+qixz);
    console.log("阳虚质"+yangxz);
    console.log("阴虚质"+yinxz);
    console.log("痰湿质"+tansz);
    console.log("湿热质"+shirz);
    console.log("血瘀质"+xueyz);
    console.log("气郁质"+qiyz);
    console.log("特禀质"+tebz);
    console.log("平和质"+pinghz);
    let tz = [];
    tz.push(qixz);
    tz.push(yangxz);
    tz.push(yinxz);
    tz.push(tansz);
    tz.push(shirz);
    tz.push(xueyz);
    tz.push(qiyz);
    tz.push(tebz);

    //体质测评中8种偏颇体质得分排序
    var arr = tz.map(function(item,index){
      return {'key':index,'value':parseInt(item)}
    })
    var sortArr = arr.sort(function(a,b){
      return b.value - a.value
    }).map(function(item){
      return item.key
    });
    console.log('8种偏颇体质得分排序:'+sortArr.join(','))

    //平和质： 是1 基本是 2 否 0
    let isPingh1 = 0;
    let isPingh2 = 0;
    //遍历对比
    for (let i = 0; i < tz.length; i++) {
      if(tz[i] < 8 ){
        isPingh1 = isPingh1 + 1;
      }
      if(tz[i] < 10){
        isPingh2 = isPingh2 + 1;
      }
    }

    //体质类别
    let tzTendency = this.state.tzTendency;
    let tzDetermine = this.state.tzDetermine;

    //判断体质类别
    if (pinghz >= 17 ){
      if(isPingh1 === 8){
        // tzType = '是平和质';
        tzDetermine.push('1')
      }else if(isPingh2 === 8){
        // tzType = '基本是平和质';
        tzTendency.push('1');
        if (tz[sortArr[0]] >= 11 ) {
          tzDetermine.push(sortArr[0]+2)
        }else if (tz[sortArr[0]] >= 9 ) {
          tzTendency.push(sortArr[0]+2)
        }
        if (tz[sortArr[1]] >= 11 ) {
          tzDetermine.push(sortArr[1]+2)
        }else if (tz[sortArr[1]] >= 9 ) {
          tzTendency.push(sortArr[1]+2)
        }
      }else{
        if (tz[sortArr[0]] >= 11 ) {
          tzDetermine.push(sortArr[0]+2)
        }else if (tz[sortArr[0]] >= 9 ) {
          tzTendency.push(sortArr[0]+2)
        }
        if (tz[sortArr[1]] >= 11 ) {
          tzDetermine.push(sortArr[1]+2)
        }else if (tz[sortArr[1]] >= 9 ) {
          tzTendency.push(sortArr[1]+2)
        }
        if (tz[sortArr[2]] >= 11 ) {
          tzDetermine.push(sortArr[2]+2)
        }else if (tz[sortArr[2]] >= 9 ) {
          tzTendency.push(sortArr[2]+2)
        }
      }
    }else{
      if (tz[sortArr[0]] >= 11 ) {
        tzDetermine.push(sortArr[0]+2)
      }else if (tz[sortArr[0]] >= 9 ) {
        tzTendency.push(sortArr[0]+2)
      }
      if (tz[sortArr[1]] >= 11 ) {
        tzDetermine.push(sortArr[1]+2)
      }else if (tz[sortArr[1]] >= 9 ) {
        tzTendency.push(sortArr[1]+2)
      }
      if (tz[sortArr[2]] >= 11 ) {
        tzDetermine.push(sortArr[2]+2)
      }else if (tz[sortArr[2]] >= 9 ) {
        tzTendency.push(sortArr[2]+2)
      }
    }
    console.log('倾向是:'+tzTendency.join(','));
    console.log('是:'+tzDetermine.join(','));

    let tzDetermineStr = '';
    let tzTendencyStr = '';
    tzDetermineStr = tzDetermine.join(',');
    tzTendencyStr = tzTendency.join(',');
    const usercode = this.state.tz_result.userId;
    const  answerItems = this.state.answerItems;

    Taro.request({
      url: `${APIBASEURL}/insertUserAnswers?usercode=${usercode}&tzDetermine=${tzDetermineStr}&tzTendency=${tzTendencyStr}`,
      data: answerItems,
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        let  resultItemcode = res.data.data;
        this.setState({
          resultItemcode: resultItemcode
        })
        if(resultItemcode !== '') {
          //跳转到查看结果页面
          Taro.navigateTo({url: `/pages/bodyIdentifyRecord/recordDetail?resultItemcode=${resultItemcode}`});

        }

      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }
  //查看结果
  toSeeResult(){
    //计算测试结果
    const answers = this.state.answers;
    let ifallAnswers = true;
    answers.forEach(function (item,index) {
      if (typeof(item) === "undefined" || answers.length < 33) {
        ifallAnswers = false;
      }
    })
    if (ifallAnswers === false) {
      Taro.showToast({
        title: '还有题目未答，请仔细检查继续答题！',
        icon: 'none',
        duration: 2000
      })
    }else{

      this.setState({
        anscount:this.state.anscount+1
      })
      //提交一次
      if (this.state.anscount == 1){
        //答题结束，计算体质测评结果并跳转
        this.calculPhysicalType(answers);
      }else{
        Taro.showToast({
          title: '正在提交中，请稍等……',
          icon: 'none',
          duration: 2000
        })
      }


    }
  }


  render() {
    const { Tcmquestions,answer} = this.state;
    return (
      <View>
        {/*体质辨识标题*/}
        <View className='at-row at-col-12 at-row--wrap phy-test-head'>
          <View className='at-row at-col-12 '>
            {/* <Image className='phy-test-icon' src={`${BASEURL}info-circle-gray.svg`} /> */}
            <text className='phy-test-icontext'>说明</text>
          </View>
          <View className='at-row at-col-12'>
            <text className='phy-test-title'>以下问题请根据您近一年的体验和感觉回答。</text>
          </View>
        </View>
        {/*  体质辨识测试内容*/}
        <View className='phy-test'>
          {
            Tcmquestions.map((que,qindex) =>{ //for each question
              const num = qindex;
              return  (
                <View className='at-row at-row--wrap phy-test-item'  key={qindex}>
                  <View className='at-col-12  phy-test-que'>
                    {que.qid}、{que.qtext}
                  </View>
                  <View className='answerOptions '>
                    <ToggleButton className=''
                                  parent={ this }
                                  answerType={que.typeId}
                                  answerValue={que.optionsValue}
                                  answerOptions={que.optionsText}
                                  quesId = {que.qid}
                                  quesNum = {num}
                    />
                  </View>
                </View>)
            })
          }
        </View>
        {/*  确认提交按钮*/}
        <View className='at-row at-col-12 '>
          <AtButton className='at-col-10 phy-test-btn ' onClick={this.toSeeResult.bind(this)}>查看结果</AtButton>
        </View>
      </View>
    );
  }
}

export default PhysicalTest;
