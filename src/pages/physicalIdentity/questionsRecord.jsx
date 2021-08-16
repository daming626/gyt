import React, {Component} from 'react';
import {View,Image } from "@tarojs/components";
import Taro,{ getCurrentInstance } from "@tarojs/taro";
import { AtButton }  from 'taro-ui'
import './physiqueTest.less'
// import {APIBASEURL,BASEURL} from "../../constants/global";
// import TabBar from "../common/tabBar";

class QuestionsRecord extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      tcmQuestions:[],
      checked:[],
      answerItemList: ['没有', '很少', '有时','经常','总是'],
      answers:[]
    }
  }
  componentDidMount () {
    const resultItemcode = getCurrentInstance().router.params.resultItemcode;
    //  获取题目答案
    Taro.request({
      url: `${APIBASEURL}/selectUserAnswersByResultcode?resultItemcode=${resultItemcode}`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        let  answers = this.state.answers;
        res.data.data.forEach(function (item,index) {
          answers.push(parseInt(item.qoption));
        });
        this.setState({
          answers: answers
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
          tcmQuestions: res.data.data
        });
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
  render() {
    const tcmQuestions = this.state.tcmQuestions;
    return (
      <View>
        <View className='at-row at-col-12 at-row--wrap phy-test-head'>
          <View className='at-row at-col-12 '>
            <Image className='phy-test-icon' src={`${BASEURL}info-circle-gray.svg`} />
            <text className='phy-test-icontext'>说明</text>
          </View>
          <View className='at-row at-col-12'>
            <text className='phy-test-title'>以下是您的答题记录。</text>
          </View>
        </View>
        {/*  体质辨识测试内容*/}
        <View className='phy-test'>
          {
            tcmQuestions.map((que,qindex) =>{ //for each question
              let  options = que.optionsText;
              let  checkedValue = this.state.answers;
              let answerItemList = options.split(",");
              let qnum = qindex;
              return  (
                <View className='at-row at-row--wrap phy-test-item'  key={qnum}>
                  <View className='at-col-12  phy-test-que'>
                    {que.qid}、{que.qtext}
                  </View>
                  <View className='answerOptions '>
                    <View className='phy-test-ans'>
                      {
                        answerItemList.map((answerItem, index) => { // answser
                          return (
                            <AtButton className={['option',checkedValue[qnum] === (index+1)? 'phy-ans-btn-selected' : 'phy-ans-btn']}
                                      circle
                                      size='small'
                                      type='secondary'
                                      key={index}>
                              {answerItem}
                            </AtButton>
                          );
                        })
                      }
                    </View>
                  </View>
                </View>)
            })
          }
        </View>
        <TabBar tabBarCurrent={3}/>
      </View>
    );
  }
}

export default QuestionsRecord
