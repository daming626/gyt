import React, {Component} from 'react';
import {View} from "@tarojs/components";
import { AtButton }  from 'taro-ui'

class ToggleButton extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      checked:'',
      answerItemList: ['没有', '很少', '有时','经常','总是'],
      answerValue:[]
    }
  }
  componentDidMount () {
    const  options = this.props.answerOptions;
    const  values = this.props.answerValue;
    let answerItemList = options.split(",");
    let answerValue = values.split(",");
    this.setState({
      answerItemList : answerItemList,
      answerValue:answerValue
    })

  }
  toggle(index,quesNum,quesId,answerItem,answerValue,answerType){
    this.setState({
      checked : index,
    })
    this.props.parent.getChildrenMsg(this,quesNum,quesId,answerItem,answerValue,answerType)
  }

  render() {
    const { answerItemList,answerValue} = this.state;
    return (
      <View className='phy-test-ans'>
        {
          answerItemList.map((answerItem, index) => { // answser
            return (
              <AtButton className={['option',this.state.checked === index? 'phy-ans-btn-selected' : 'phy-ans-btn']}
                        circle
                        size='small'
                        type='secondary'
                        key={index}
                        onClick={this.toggle.bind(
                          this,
                          index,
                          this.props.quesNum,
                          this.props.quesId,
                          answerItem,
                          answerValue[index],
                          this.props.answerType)}
              >
                {answerItem}
              </AtButton>
            );
          })
        }
      </View>
    );
  }
}

export default ToggleButton;
