import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Home({navigation}) {
    return (
        <View style={styles.bloco}>
            <Text style={styles.texto}>Previsão do Tempo</Text>
            <Text style={styles.texto2}>Escolha uma Cidade!</Text>

            <View>
                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Mongagua")}>
                    <Text style={styles.txtBotao}>Mongaguá</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Itanhaem")}>
                    <Text style={styles.txtBotao}>Itanhaém</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("Santos")}>
                    <Text style={styles.txtBotao}>Santos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("PG")}>
                    <Text style={styles.txtBotao}>Praia Grande</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}
                    onPress={()=>navigation.navigate("SV")}>
                    <Text style={styles.txtBotao}>São Vicente </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bloco:{
        flex: 1,
        backgroundColor: '#90e0ef'
    }, 
    
    texto:{
        marginTop: 30,
        fontSize:30,
        textAlign: "center",
        fontWeight: "bold",
        color: '#0096c7',
    },

    texto2:{
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold",
        color: '#0096c7'
    },

    botao:{
        marginTop:22,
        backgroundColor:'#0096c7',
        width:'50%',
        height: '9%',
        marginLeft:'26%',
        borderRadius: 10,
    },

    txtBotao:{
        fontSize: 20,
        color: '#FFF',
        marginTop: 2,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
