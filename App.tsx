import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native'

interface IProps {

}
interface IState {
  inputA: any
  inputB: any
  sum: number
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      inputA: 0,
      inputB: 0,
      sum: 0
    }
    this.onInputAChange = this.onInputAChange.bind(this)
    this.onInputBChange = this.onInputBChange.bind(this)
  }

  onInputAChange(inputA: any) {
    this.setState({ inputA }, () => {
      this.updateSum()
    })
  }

  updateSum() {
    const { inputA, inputB } = this.state
    const sum = parseInt(inputA, 10) + parseInt(inputB, 10)
    if (!isNaN(sum)) {
      this.setState({ sum })
    }
  }

  onInputBChange(inputB: any) {
    this.setState({ inputB }, () => {
      this.updateSum()
    })
  }

  render() {
    const { sum, inputA, inputB } = this.state

    return (
        <View
          accessible={false}
          style={styles.container}
        >
          <Image style={styles.image} source={require('./resources/logo.png')} />
          <Text style={styles.intro}>This is a Sample App to demonstrate Mobile App testing with TestingBot. Enter two numbers to see the sum.</Text>
          <Text style={styles.text}>A:</Text>
          <TextInput
            accessible={true}
            style={styles.textInput}
            editable
            accessibilityLabel={'inputA'}
            testID= {'inputA'}
            maxLength={5}
            value={inputA.toString()}
            keyboardType={'numeric'}
            onChangeText={this.onInputAChange}
          />
          <Text style={[styles.text, styles.spacer]}>+</Text>
          <Text style={styles.text}>B:</Text>
          <TextInput
            accessible={true}
            style={styles.textInput}
            editable
            accessibilityLabel={'inputB'}
            testID= {'inputB'}
            keyboardType={'numeric'}
            maxLength={5}
            value={inputB.toString()}
            onChangeText={this.onInputBChange}
          />
          <Text style={[styles.text, styles.spacer]}>=</Text>
          <Text style={styles.text}>Total:</Text>
          <TextInput
            accessible={true}
            style={styles.textInput}
            editable={false}
            accessibilityLabel={'sum'}
            testID= {'sum'}
            value={sum.toString()}
          />
        </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 32,
    paddingHorizontal: 24,
    marginHorizontal: 40,
  },
  image: {
    height: 64,
    width: 64,
    marginBottom: 20,
  },
  intro: {
    marginBottom: 40,
    color: '#4d4d4d',
  },
  textInput: {
    borderColor: '#737373',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    textAlign: 'center',
    width: 80,
  },
  text: {
    textAlign: 'left',
  },
  spacer: {
    marginBottom: 15,
  },
});

export default App;
