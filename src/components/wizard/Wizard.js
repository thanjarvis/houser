import React from 'react'
import {Link} from 'react-router-dom'
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// posible to change the navigation method
import {Switch, Route} from 'react-router-dom'
import Wizard1 from './Wizard1'
import Wizard2 from './Wizard2'
import Wizard3 from './Wizard3'




class Wizard extends React.Component{
    
    


    render(){
        
        return(
            <div>
                <Switch>
                    <Route exact path='/wizard/step1' component={Wizard1}/>
                    <Route path='/wizard/step2' component={Wizard2}/>
                    <Route path='/wizard/step3' component={Wizard3}/>
                </Switch>
                
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                

            </div>
        )
    }
}

export default Wizard