import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Welcome from '../../../../../assets/img/welcome.png'

export default function ExamsAccess() {
    const user =
    {
        name: 'Marbein Getsemani',
        lastname: 'Colin',
        surname: 'Cruz',
        matricula: '20223tn054',
        curp: 'SOGA970629HMMRRBE3'
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{alignItems:'center'}}>
                <Image source={Welcome} style={styles.img} />
                <Text style={styles.title}>{`¡Hola ${user.name}!`}</Text>
                </View>
                

                <View style={styles.input}>
                   
                    <TextInput
                        placeholder='Codigo de acceso'
                        placeholderTextColor='#6b7288'
                        style={styles.inputControl}
                    />
                </View>

                <View style={styles.formAction}>
                    <TouchableOpacity

                    >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Acceder</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
    }, card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
    }, title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#052368',
        textAlign: 'center'
    }, input: {
        marginBottom: 10,
        alignItems:'left',
        textAlign:'left'
    },
    inputControl: {
        borderWidth: 2,
        height: 44,
        borderColor: '#4480FF',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        marginTop:30,
    },
    btn: {
        backgroundColor: '#4480FF',
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        borderColor: '#4480FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingHorizontal: 30,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    form: {
        marginBottom: 20,
        flex: 1,
    },
    formAction: {
        marginVertical: 10,
    }, img: {
        width: 150,
        height: 150,
    }

})