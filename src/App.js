import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { taxableIncome: '', taxDeducted: '' };
  }

  updateTax(){
    alert("Update tax with " + this.state.taxableIncome);
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>make an app that consumes the Income Tax object here</Text>
        </View>
        <TextInput
          ref='todo'
          style={styles.currentTodo}
          placeholder="Type your taxable income here!"
          value={this.state.taxableIncome}
          onChangeText={(text) => this.setState({ taxableIncome: text })}
          onSubmitEditing={() => this.updateTax()}
          autoFocus={true}
          blurOnSubmit={false}
        />
        <TextInput
          ref='todo'
          style={styles.currentTodo}
          placeholder="Type your tax deducted here!"
          value={this.state.taxDeducted}
          onChangeText={(text) => this.setState({ taxDeducted: text })}
          onSubmitEditing={() => this.updateTax()}
          autoFocus={true}
          blurOnSubmit={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "90%",
    margin: "auto"
  }});
