import React, {Component} from 'react'
import {
  View,
  Alert,
  StyleSheet,
  Text,
} from 'react-native'
import Header from "./Header"
import Picture from "./Picture"
import Description from "./Description"
import Link from "./Link"
import Reminders from "./Reminders"

export default class App extends  Component {
    onPressShare = () => {
        Alert.alert('Share Pressionado')
    }
    onPressBack = () => {
        Alert.alert('Seta Pressionada')
    }
    onPressAlert = () => {
        Alert.alert('Alerta Pressionada')
    }
    onPressToArrive = () => {
        Alert.alert('Como chegar Pressionado')
    }
    render(){
        return (
            <View>
                <Header
                    onPress={this.onPressBack}
                    title={'Detalhes'}
                    icon={require('./Assets/back-arrow-icon.png')}
                />
                <Picture
                    pic={require('./Assets/comidas.jpg')}
                />
                <Description
                    onPress={this.onPressShare}
                    title={'Oficina: Culinária Vegana'}
                    subtitle={'Facilitadoras: Bruna Lz\ne Andréa Giansante'}
                    icon={require('./Assets/share-icon.png')}
                />
                <View style={styles.container}>
                  <Link
                    onPress={this.onPressAlert}
                    icon={require('./Assets/alert-icon.png')}
                    title={'Ativar alerta'}
                  />
                </View>
                <View style={styles.container}>
                  <Reminders
                      title={'Quinta-feira, 14 de janeiro\n19:00 até 22:00'}
                      icon={require('./Assets/watch-icon.png')}
                  />
                </View>
                <View style={styles.container}>
                  <Reminders
                      title={'Local: Assis (em frente ao Espaço Emes)'}
                      icon={require('./Assets/location-icon.png')}
                  />
                </View>
                <View style={styles.container}>
                  <Link
                    onPress={this.onPressToArrive}
                    icon={require('./Assets/alert-icon.png')}
                    title={'Como chegar'}
                  />
                </View>
                <View style={styles.container}>
                  <Text style={styles.title}>{'Sobre'}</Text>
                  <Text style={styles.subtitle}>{'20 vagas\nInscrição: envio do número do ingresso +\n nome completo + RG para\noficinas@zons.art.br\nContribuição: Espontânea ao final da oficina\n'}</Text>
                </View>
            </View>

        )

    }
}

const styles = StyleSheet.create({
  container: {
      paddingVertical: 10,
      paddingHorizontal: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    color: '#18203F',
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
