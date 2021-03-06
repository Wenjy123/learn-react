import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import IconButton from '../../../../components/g/IconButton';
import { Config, Images } from "../../../../config";

class Bottom extends Component {

  static defaultProps = {
  };

  render() {

    const {
      type,
      view,
      like,
      reply
    } = this.props;

    const paddingStyle = {
      padding: this.props._padding,
      paddingTop:0,
    };

    return (
      <View style={[paddingStyle,styles.wrapper]}>
        <Text style={styles.text}>{type} · {view}阅读</Text>
        <View style={styles.btnGroup}>
          <IconButton icon={ Images.good }
                      iconStyle={styles.icon}
                      wrapperStyle={styles.btn}
                      noAction={true}>
            <Text style={[styles.btnText, styles.text]}>
              {like}
            </Text>
          </IconButton>
          <IconButton icon={ Images.community }
                      iconStyle={styles.icon}
                      wrapperStyle={styles.btn}
                      noAction={true}>
            <Text style={[styles.btnText, styles.text]}>
              {reply}
            </Text>
          </IconButton>
        </View>
      </View>
    )
  }
}

const mediaWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#aaa',
  },
  btnText: {
    marginLeft: 5
  },
  btn: {
    marginLeft: 20
  },
  icon: {
    width: 22,
    height: 18,
    tintColor: '#aaa',
  },
});

export default Bottom;