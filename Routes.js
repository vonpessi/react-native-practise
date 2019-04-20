import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Nasa from './NasaApi'
import Home from './Home'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "nasa" component = {Nasa} title = "Nasa" />
      </Scene>
   </Router>
)
export default Routes