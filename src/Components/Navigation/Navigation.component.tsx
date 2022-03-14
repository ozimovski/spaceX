import { Component } from 'react';

// style
import NavigationContainer from './style/NavigationContainer.style';
import NavigationLink from './style/NavigationLink.style';

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationLink>SpaceX</NavigationLink>
      </NavigationContainer>
    );
  }
}
