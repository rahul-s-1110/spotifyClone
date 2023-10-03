import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../screens/HomeScreen";
import { Entypo, AntDesign,Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../utills/color";
import LoginScreen from "../screens/auth/login";

const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:"rgba(0,0,0,0.5)",
                position:"absolute",
                bottom:0,
                left:0,
                right:0,
                shadowOpacity:4,
                shadowRadius:4,
                elevation:4,
                shadowOffset:{
                    width:0,
                    height:-4
                },
                borderTopWidth:0
            }
        }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: colors.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={colors.white} />
            ) : (
              <AntDesign name="home" size={24} color={colors.white} />
            ),
        }} 
      />
      <Tab.Screen 
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: colors.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color={colors.white} />
            ) : (
              <Ionicons name="person-outline" size={24} color={colors.white} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="loginScreen" component={LoginScreen} options={{headerShown:false}} />
                <Stack.Screen name="main" component={BottomTab} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator