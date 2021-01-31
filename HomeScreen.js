import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      word: '',
      lexicalCategory: '',
      examples: [],
      definition: '',
    };
  }
  getWord = (word) => {
    var searchKeyWord = word.toLowerCase();
    var url =
      'https://rupinwhitehatjr.github.io/dictionary/' + searchKeyWord + '.json';
    return fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        } else {
          return null;
        }
      })
      .then((response) => {
        var responseObject = response;
        if (responseObject) {
          var wordData = responseObject.definitions[0];
          var wordDefinition = wordData.description;
          var wordLexicalCategory = wordData.wordtype;
          this.setState({
            word: this.state.text,
            definition: wordDefinition,
            lexicalCategory: wordLexicalCategory,
          });
        } else {
          this.setState({
            word: this.state.word,
            definition: 'Not found',
          });
        }
      });
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
          placeholder='Search word'></TextInput>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({
              isSearchPressed: true,
            });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>Word : </Text><Text>{this.state.word}</Text>
        <Text style={styles.displayText}>Definition : </Text><Text>{this.state.definition}</Text>
        <Text style={styles.displayText}>Lexical Category :</Text><Text>{this.state.lexicalCategory}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 50,
    borderColor: 'black',
    borderWidth: 2.5,
    marginTop: -200,
  },
  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 500,
    backgroundColor: '#B2D649',
    marginTop: 30,
  },
  buttonText:{ 
    fontWeight: 'bold', 
  },
  displayText:{ 
    fontSize: 20, 
    color: '#45690C',
    fontWeight: 'bold', 
    marginTop: 15
  },
});
