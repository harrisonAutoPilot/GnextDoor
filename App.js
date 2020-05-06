/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from './pages/welcome';
import HomeScreen from './pages/HomeScreen';
import Select from './pages/select';
import Login from './pages/Login';
import Splash from './pages/splash';
import LoginB from './pages/LoginB'
import Test from './pages/Test'
import Buyer from './pages/buyer'
import Seller from './pages/merchant'
import SelectImage from './pages/selectImage'
import PhotoCamera from './pages/camera'
import ChooseImage from './pages/chooseImage'
import PaymentDetails from './pages/paymentDetails'
import Authenticate from './pages/authenticate'
import Loading from './pages/loading'


//import HomeScreenn from './pages/HomeScreenn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createSwitchNavigator({
  Splash :{screen:Splash},
  Home: {screen: HomeScreen},
  Login: {screen: Login},
  Select: {screen: Select},
  LoginB: {screen: LoginB},
  Test: {screen: Test},
  Buyer :{screen:Buyer},
  Seller:{screen:Seller},
 SelectImage:{screen:SelectImage},
 PhotoCamera: {screen:PhotoCamera},
 ChooseImage:{screen:ChooseImage},
 PaymentDetails:{screen:PaymentDetails},
 Authenticate :{screen:Authenticate},
 Loading :{screen:Loading},


  //HomeScreenn: {screen: HomeScreenn},
  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
