/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Navigator,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import TabNavigator from 'react-native-tab-navigator';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'tb_popular',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_popular'}
              selectedTitleStyle={{color:'green'}}
              title="最热"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_mainframe.png')} />}
              renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_mainframeHL.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_trending'}
              selectedTitleStyle={{color:'green'}}
              title="趋势"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_contacts.png')} />}
              renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_contactsHL.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favorite'}
              selectedTitleStyle={{color:'green'}}
              title="收藏"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_discover.png')} />}
              renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_discoverHL.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              selectedTitleStyle={{color:'green'}}
              title="我的"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_me.png')} />}
              renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/tabbar_meHL.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red',
  },
  page2:{
    flex:1,
    backgroundColor:'yellow',
  },
  image:{
    width:22,
    height:22,
  },
});
