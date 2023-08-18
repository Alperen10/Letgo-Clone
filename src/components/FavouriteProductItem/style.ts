import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
    favourite:{
        width:width*0.29
    },
    favouriteView:{
        width:width*0.27,
        height:width*0.27,
    },
    favouriteImage:{
        width:width*0.27,
        height:width*0.27,
        borderRadius:10
    },
    labeledFav:{
        transform:[{rotate:"45deg"}],
        position:"absolute",
        right:-25,
        top:12,
        backgroundColor:"white",
        paddingVertical:3,
        paddingHorizontal:20
    },
    main:{
        width:width*0.46,
        height:width*0.46,
        alignItems:"center",
    },
    mainView:{
        width:width*0.42,
        height:width*0.42,
    },
    mainImg:{
        width:width*0.42,
        height:width*0.42,
        borderRadius:12,
    }

})

export default styles;