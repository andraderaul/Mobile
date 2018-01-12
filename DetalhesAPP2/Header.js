import React from 'react'
import  {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform
} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title.toUpperCase()}</Text>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={props.icon}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
      //backgroundColor: 'red',
        ...Platform.select({
            ios: {
                paddingTop: 20
            }
        }),

    },
    icon: {
        tintColor:'#19B89B',
    },
    iconContainer: {
        paddingVertical: 6,
        paddingHorizontal: 15,
      //backgroundColor: 'green'
    },
    title: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      //flex: 1,
      //backgroundColor: 'blue',
        fontSize: 20,
        fontWeight: '900',
        color: '#18203F',
        textAlign: 'center'

    }
})
export default Header
