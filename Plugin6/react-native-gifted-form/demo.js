import React, { AppRegistry, Component } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        fullName: 'Marco Polo',
        tos: false,
      }
    }
  }

  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }

  render() {
    const { fullName, tos, gender } = this.state.form
    console.log('Form 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <GiftedForm
        formName='signupForm'
        openModal={(route) => { this.props.navigator.push(route) }}
        onValueChange={this.handleValueChange.bind(this)}
      >
        <GiftedForm.TextInputWidget
          name='fullName'
          title='Full name'
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
          value={fullName}
        />
        <GiftedForm.HiddenWidget name='tos' value={tos} />
      </GiftedForm>
    )
  }
}
