// rnfes + Enter 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useState, useEffect } from 'react'
import { VerPlanetas } from '../services/VerPlanetas'

const TarjetasDB = () => {
    const [Planetas, setPlanetas] = useState([])
    useEffect(() => {
        try {
            const axiosVerPlanetas = async () => {
                const sistema = await VerPlanetas()
                setPlanetas(sistema)
            }
            axiosVerPlanetas()
        }     
        catch (error){
            console.error('Error al Traer la Tabla',error)
        }     
    },[])
    return (
        <View>
            <Text>TarjetasDB</Text>
        </View>
    )
}

export default TarjetasDB

const styles = StyleSheet.create({})