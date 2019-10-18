import React from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAll} from '../../ducks/reducer'


class Wizard3 extends React.Component{
    constructor(){
        super()
        this.state = {
            mortgage: 0,
            rent: 0,
            reduxState: {}
        }
    }

    componentDidMount = () => {
        let test = this.props.getAll()
        this.setState({
            reduxState: test.payload
        })
    }

    handleChange = (e) => {
        let {name} = e.target
        this.setState({
            [name]: e.target.value
        })
    }


    addNew = () => {
        const name = this.state.name
        const address = this.state.address
        const city = this.state.city
        const state = this.state.state
        const zipcode = this.state.zipcode

        axios.post('/api/addNew', {name, address, city, state, zipcode})

    }


    render(){
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
                        onClick={()=> this.addNew()}
                    >Complete</button>
                </Link>

            </div>

        )
    }

}

function mapToStateProps(state){
    return{
        reducer: state.reducer
    }
}

export default connect(
    mapToStateProps, {getAll}
) (Wizard3)