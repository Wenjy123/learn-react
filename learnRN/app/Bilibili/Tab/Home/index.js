import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Config } from "../../config";
import Bangumi from "./Bangumi";
import Recommend from "./Recommend";

const styles = StyleSheet.create({
  label: {
    fontSize: Config.tabTitleSize
  },
  indicator: {
    width:80,
    backgroundColor: Config.fontColor,
    marginLeft: 55,
  },
  tabs: {
    height: Config.TabNavHeight,
  },
  tab: {
    backgroundColor: Config.mainColor,
  }
});



const Home = TabNavigator({
  TabHomeRecommend: {
    screen: Recommend,
     navigationOptions: {
       tabBarLabel: '推荐',
     }
  },
  TabHomeBangumi: {
    screen: Bangumi,
     navigationOptions: {
       tabBarLabel: '追番',
     }
  },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: Config.fontColor,
    inactiveTintColor: Config.TabUnActivefontColor,
    labelStyle: styles.label,
    tabStyle: styles.tabs,
    style: styles.tab,
    indicatorStyle: styles.indicator,
  },
});
export default Home;