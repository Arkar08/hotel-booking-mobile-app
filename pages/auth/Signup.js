import React from 'react'
import { Stack,TextInput,Button,IconButton } from "@react-native-material/core";
import { View , Text,StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Signup = () => {
    const onSignup = () =>{
        console.log('signup successfully.')
    }

    const login = () =>{
        console.log('route change')
    }

  return (
    <>
        <View style={styles.main}>
            <Text style={styles.text}>Hotel Booking App</Text>
        </View>
        <View style={styles.container}>
                <Text style={styles.header}>Signup</Text>
                <Stack spacing={6}>
                    <TextInput label="FullName" style={styles.input} trailing={props => (
                        <IconButton icon={props => <Icon name="account" {...props} />} {...props} />
                    )}/>
                    <TextInput label="Email" style={styles.input} trailing={props => (
                        <IconButton icon={props => <Icon name="account" {...props} />} {...props} />
                    )}/>
                    <TextInput label="Password" style={styles.input} trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                    )}/>
                    <TextInput label="Confirm Password" style={styles.input} trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                    )}/>
                    <Button title='Signup' color="green" style={styles.btn} onPress={()=>onSignup()}/>
                </Stack>
        </View>
        <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? <Text style={styles.sign} onPress={()=>login()}>Login</Text></Text>
        </View>
    </>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    main:{
        marginTop:'100'
    },
    text:{
        textAlign:'center',
        fontSize: 35,
        fontWeight: 'bold',
        color:'green',
    },
    input:{
        paddingLeft:'10',
        paddingRight:'10'
    },
    btn:{
        padding:'10',
        marginLeft:'10',
        marginRight:'10',
        marginTop:'10',
    },
    header:{
        textAlign:'center',
        fontSize:24,
        color:'green',
        textTransform:'uppercase',
        marginBottom:'30',
        fontWeight:'bold'
    },
    footer:{
        marginBottom:'10'
    },
    footerText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    },
    sign:{
        color:'red',
        textDecorationLine:'underline'
    }
})

export default Signup
