import React from 'react'

import {
    Image,
    StyleSheet,
    View,
    Text,
    I18nManager,
    TextInput
} from 'react-native';
import { IMAGES, COLORS } from '../../common';
import { width, height } from '../../common'

export default class CustomInput extends React.Component {
    constructor() {
        super();
        this.state = {
            error: true,
        }
    }
    render() {
        return (
            // <View style={{ minHeight: height * 0.1, }}>
            //     {/* {this.state.focused?<Text style={styles.inputHeader}> {this.props.placeholder} </Text>:null} */}
            //     <View style={styles.textInputCotainer}>
            //         {this.props.iconName ? <View style={{ marginRight: width * 0.04 }}>
            //             <Icon name={this.props.iconName} type='font-awesome' size={width * 0.05} color={COLORS.darkGray} />
            //         </View> : null}
            //         <TextInput
            //             placeholder={this.props.placeholder}
            //             style={styles.textInput}
            //             // onFocus={()=>this.setState({focused:true})}
            //             onSubmitEditing={this.props.onSubmitEditing}
            //             // placeholderTextColor={COLORS.main}
            //             secureTextEntry={this.props.password}
            //             onChangeText={this.props.onChangeText}
            //             returnKeyType={this.props.returnKeyType}
            //             returnKeyLabel={this.props.returnKeyLabel}
            //             keyboardType={this.props.keyboardType}
            //             blurOnSubmit={this.props.returnKeyLabel == "go"}
            //             ref={this.props.reference}
            //             value={this.props.value}
            //         />
            //     </View>
            //     {this.props.error ? <Text style={styles.inputError}> {this.props.error} </Text> : null}
            // </View>

    <View style={styles.container}>

      {/* <Image source={IMAGES.loginBG} style={styles.loginBG} /> */}

    </View>

        )
    }
}

const styles = StyleSheet.create({
    textInputCotainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: width * 0.06,
        // borderWidth:width*0.002,
        // borderColor:COLORS.main,
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: 'rgba(255,255,255,.9)',
        padding: width * 0.02,
        elevation: 1.5,
        // marginTop:height*0.02,
    },
    textInput: {
        padding: 0,
        textAlign: !I18nManager.isRTL ? 'left' : 'right',
        textAlignVertical: 'center',
        width: width * 0.72,
        fontSize: width * 0.035,
        color: COLORS.textBlack,
        fontWeight: 'bold',

    },
    inputHeader: {
        fontSize: width * 0.03,
        color: COLORS.textBlack,
        marginBottom: width * 0.02
    },
    inputError: {
        fontSize: width * 0.03,
        color: COLORS.secondery,
        marginVertical: width * 0.01,
        marginHorizontal: width * 0.02,
        height: height * 0.05
    }
});
