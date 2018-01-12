import React from 'react'
import {
    Image,
    View,
    StyleSheet
}from 'react-native'

const Picture = (props) => {
    return (
       <View>
           <Image
               style={styles.image}
               source={props.pic}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 390,
        height: 150
    }

})
export default Picture