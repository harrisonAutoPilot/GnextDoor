import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {Navigation} from 'react-navigation';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import TrackerNavBar from './TrackerNavBar';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Driver from './Account/drivers';
//import Tabs from 'react-native-tabs';

console.disableYellowBox = true;

import Home_Activity from './Home_Activity';
import Home_ActivityB from './Home_ActivityB';
import Request_Activity from './Request_Activity';
import Circle_Activity from './Circle_Activity';
import Farmers_Activity from './Farmers_Activity';
import SavedLocation from './user/savedLoc';
import About from './user/about';
//import Details_Activity from './Details_Activity';
import Profile_Activity from './Account/Profile_Activity';
import User_Profile from './Account/User_Profile';
//import Account_Activity from './Account_Activity';
import OrderDetails from './OrderDetails';
import OrderDetailsMore from './OrderDetailsMore';
import Request_Activity1 from './Request_Activity1';
import Main_One from './mainOne';
import SelectDriver from './SelectDriver';
import HomeNew from './HomeNew';
import General from './user/general';
import Tracker from './Tracker';
import NewOrder from './orders/NewOrder';
import TopTab from './topTabOrder';
//import TopTabAccount from './topTabAccount';


//const HomeTab = createStackNavigator({ Home:Home_Activity }, );
const HomeTab = createSwitchNavigator(

   {
     HomeB: Home_ActivityB,
     Home: Home_Activity,
     Main_One: Main_One,
     OrderDetails: OrderDetails,
     OrderDetailsMore: OrderDetailsMore,
     SelectDriver:SelectDriver,
     HomeNew:HomeNew,
     Tracker: Tracker ,
     Request1: Request_Activity1 ,
     Home_ActivityB: Home_ActivityB ,
      //TopTab:TopTab,
   },



);




const CircleTab = createSwitchNavigator(
  {
    Contact: Circle_Activity ,
    Request: Request_Activity ,
    Me: Profile_Activity ,
    User: User_Profile ,
    Request1: Request_Activity1 ,

  },


);

const AccountTab = createSwitchNavigator(
  {

    Me: Profile_Activity ,
     Drivers: Driver ,
      User: User_Profile ,


  },


);






const MainApp = createBottomTabNavigator(
  {

   Home: HomeTab ,
   Contact: CircleTab,
   Me: AccountTab ,


  },


// const MainApp = createBottomTabNavigator(
//   {
//     Home: HomeTab ,
//     Circle: CircleTab,
//     Profile: AccountTab ,
//
//
//   },


//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         if (routeName === 'Home') {
//           return (
//             <Image
//               source={ require('../assets/hoo.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         } else if (routeName === 'Profile') {
//           return (
//             <Image
//               source={ require('../assets/user.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//          }
//
//         else {
//           return (
//             <Image
//               source={ require('../assets/tag.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//         }
//       },
//     }),
//
//     tabBarOptions: {
//       activeTintColor: 'rgb(255,165,0)',
//       inactiveTintColor: '#263238',
//       indicatorStyle: {
//          backgroundColor: '#f4f4f4',
//
//
//        },
//
//        style: {
//          backgroundColor: '#fff',
//        },
//     },
//   }
// );

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
         iconName = `ios-search`;
         IconComponent = Ionicons;
       } else if (routeName === 'Contact') {
        iconName = `md-people`;
      }
      else if (routeName === 'Me') {
        iconName = `md-person`;
      }
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'rgb(255,165,0)',
    inactiveTintColor: 'gray',
  },
}
);
const Test = createAppContainer(MainApp);

export default Test;
