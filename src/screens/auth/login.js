import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo,FontAwesome,AntDesign  } from '@expo/vector-icons';
import colors from "../../utills/color";
import * as AppAuth from 'expo-app-auth';

const LoginScreen = () => {
  
  // async function authenticate(){
  //   console.log("funcall")
  //   const config = {
  //     issuer:"https://accounts.spotify.com",
  //     clintId:"2525a1a753f24d789161923b9b920b68",
  //     scopes:[
  //       "user-read-email",
  //       "user-library-read",
  //       "user-raed-recently-played",
  //       "user-top-read",
  //       "playlist-raed-private",
  //       "playlist-read-collaborative",
  //       "playlist-modify-public"
  //     ],
  //     redirectUrl:"exp://localhost:19000/--/spotify-auth-callback"
  //   }
  //   const result = await AppAuth.authAsync(config);
  // }

  return (
    <LinearGradient style={{flex:1,alignItems:"center",justifyContent:"center"}} colors={["#040306",colors.bg7]}>
      <Entypo style={{textAlign:"center"}} name="spotify" size={80} color={colors.white} />
      <Text style={styles.headTxt}>Million of songs free on Spotify!</Text>
      <View style={{marginTop:80,paddingHorizontal:20}}>
        <Pressable onPress={()=>console.log("call")} style={styles.spotifyBtn}>
          <Text style={{fontWeight:'500'}}>Sign in with spotify</Text>
        </Pressable>

        <Pressable style={styles.loginbtn}>
          <FontAwesome name="mobile-phone" size={24} color={colors.white} />
          <Text style={styles.loginTxt}>Continue with Mobile Number</Text>
        </Pressable>

        <Pressable style={styles.loginbtn}>
          <AntDesign  name="google" size={24} color={colors.red} />
          <Text style={styles.loginTxt}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.loginbtn}>
          <Entypo  name="facebook" size={24} color={colors.blue} />
          <Text style={styles.loginTxt}>Continue with Facebook</Text>
        </Pressable>

      </View>
    </LinearGradient>
  );
}; 

export default LoginScreen;

const styles = StyleSheet.create({
  loginbtn:{
    padding:10,backgroundColor:colors.bg7,marginTop:20,borderRadius:20,alignItems:"center",justifyContent:"center",borderColor:colors.whiteBorder,flexDirection:"row",borderWidth:0.8,width:300
  },
  loginTxt:{
    fontWeight:"500",textAlign:"center",flex:1,color:colors.white
  },
  spotifyBtn:{
    padding:10,backgroundColor:colors.spotify,borderRadius:20,alignItems:"center",justifyContent:"center",width:300
  },
  headTxt:{
    color:colors.white,fontSize:40,paddingHorizontal:20,textAlign:"center",fontWeight:"bold",marginTop:30
  }
});
