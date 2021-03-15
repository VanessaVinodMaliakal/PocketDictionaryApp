import * as React from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header
        backgroundColor = {'#45690C'}
        centerComponent = {{
          text: 'POCKET DICTIONARY APP',
          style: { color: '#FFFFFF' },
        }}
      />
    );
  }
}
