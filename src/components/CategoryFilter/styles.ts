import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get("window")
const styles = StyleSheet.create({
    center:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    scrollStyle:{
        height:height*0.095,
        marginBottom:22,
        marginTop:20,
        paddingHorizontal:8
    },
    image:{
        height:56,
        width:56,
        borderRadius:28,
    }
})

export default styles;