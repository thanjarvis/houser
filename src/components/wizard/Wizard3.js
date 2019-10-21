import React from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAll, sendPart3, setToDashboard} from '../../ducks/reducer'
import {Redirect} from 'react-router-dom'



class Wizard3 extends React.Component{
    constructor(){
        super()
        this.state = {
            mortgage: 0,
            rent: 0,
            toDashboard: false,
            dbPromise: null
        }
    }

    // componentDidMount = () => {
    //     let test = this.props.getAll()
    //     this.setState({
    //         reduxState: test.payload
    //     })
    // }

    handleChange = (e) => {
        let {name} = e.target
        this.setState({
            [name]: e.target.value
        })
    }

    sendPart3 =() => {
        this.props.sendPart3(this.state.mortgage, this.state.rent)
    }


    addNew = () => {
        this.sendPart3()
    }


    render(){
        // HERE//////////////////////////////////////////////////////////////////////you are trying to figure out how to get the page to change when they push the complete button. youre sending info back and forth trying to get it to only move over to the landing page once everything else has already been excecuted.....stuff sent to the db...
        console.log('rendering wiz3 props', this.props.dbPromise, this.props.toDashboard);
        console.log('rendering wiz3 state', this.state.dbPromise, this.state.toDashboard);

        if (this.state.toDashboard === true) {
            this.state.toDashboard = false
            this.state.dbPromise = null
            return <Redirect to='/' />
          }
        if(this.state.dbPromise !== null){
            this.props.dbPromise.then(
                () => {
                    setToDashboard(true)
                }
            )
        }
        
        return(
            <div>
                <input
                    id='mortgage'
                    value={this.state.mortgage}
                    name='mortgage'
                    placeholder='Monthly Mortgage'
                    onChange={e => this.handleChange(e)}
                />
                <input
                    id='rent'
                    value={this.state.rent}
                    name='rent'
                    placeholder='Monthly Rent'
                    onChange={e => this.handleChange(e)}
                />

                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>

                 <Link to='/'>
                    <button
                        // onClick={() => this.props.sendPart3(this.state.mortgage, this.state.rent)}
                        onClick={()=> this.addNew()}
                    >Complete</button>
                    
                 </Link>
                

            </div>

        )
    }

}

function mapToStateProps(state){
    console.log('this is state. reducer', state.reducer);

    return{
        reducer: state.reducer
    }
}

export default connect(
    mapToStateProps, {getAll, sendPart3, setToDashboard}
) (Wizard3)