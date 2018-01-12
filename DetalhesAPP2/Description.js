import React from 'react'
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const Description = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.cont}>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
                <TouchableOpacity
                    onPress={props.onPress}
                    style={styles.iconContainer}>
                    <Image
                        style={styles.icon}
                        source={props.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    cont: {
        height: 50,
        //backgroundColor:'black',
        flexDirection:'row'
    },
    icon: {
        tintColor: '#19B89B'
    },
    iconContainer: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        position:'absolute',
        right: 0,
        bottom: 0,
        //backgroundColor:'blue'
    },
    title: {
       // position: 'absolute',
        fontSize: 20,
        fontWeight: '400',
        color: '#18203F',
        //backgroundColor: 'green'
    },
    subtitle: {
        // position: 'absolute',
        //top: 20,
        //bottom: 20,
       // left: 20,
        //right: 20,
        fontSize: 15,
        fontWeight: '300',
        color: '#8F8E94',
      // backgroundColor:'red'
    }
})
export default Description
