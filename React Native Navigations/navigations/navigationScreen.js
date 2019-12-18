import {createAppContainer} from 'react-navigation'

import {createStackNavigator} from 'react-navigation-stack'

import {createDrawerNavigator} from 'react-navigation-drawer'

import {createBottomTabNavigator} from 'react-navigation-tabs'

import ItemList from './Components/itemList'
import Item from './Components/item'
import TabA from './Components/tabA'
import TabB from './Components/tabB'
import TabC from './Components/tabC'




const Stack = createStackNavigator({
    ItemList:ItemList,
    Item:Item
})


const Tab = createBottomTabNavigator({
    TabA:TabA,
    TabB:{screen:TabB},
    TabC:TabC,
})


const Drawer = createDrawerNavigator({
    STACK:Stack,
    TAB:Tab,

})


export const AppNavigator = createAppContainer(Drawer)