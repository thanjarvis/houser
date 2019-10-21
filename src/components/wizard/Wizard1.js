import React from 'react'
import{Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getAll, sendPart1} from '../../ducks/reducer'



class Wizard1 extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            reduxState: {}
        }
    }

    // componentDidMount = () => {
    //     let test = this.props.getAll()
    //     console.log('this is test redux', test);
    //     // test.payload.then(payload => {
    //     //     console.log('this is payload', payload)
    //     //     this.setState({
    //     //         reduxState: payload
    //     //     })
    //     // })
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

    render(){
        // console.log('this is the new redux state', this.state.reduxState);
        
        return(
            <div>
                <input
                    id='name'
                    value={this.state.name}
                    name='name'
                    placeholder='Name'
                    onChange={e => this.handleChange(e)}
                />
                <input
                    id='address'
                    value={this.state.address}
                    name='address'
                    placeholder='Address'
                    onChange={e => this.handleChange(e)}
                />
                <input
                    id='city'
                    value={this.state.city}
                    name='city'
                    placeholder='City'
                    onChange={e => this.handleChange(e)}
                />
                <input
                    id='state'
                    value={this.state.state}
                    name='state'
                    placeholder='state'
                    onChange={e => this.handleChange(e)}
                />
                <input
                    id='zipcode'
                    value={this.state.zipcode}
                    name='zipcode'
                    placeholder='Zipcode'
                    onChange={e => this.handleChange(e)}
                />
                <Link to='/wizard/step2'>
                    <button
                        onClick={() => this.props.sendPart1(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zipcode)}
                    >Next Step</button>
                </Link>
            </div>

        )
    }

}


function mapStateToProps(state){
    
    return{
        reducer: state.reducer
        
    }
}

export default connect(
    mapStateToProps, {getAll, sendPart1}
) (Wizard1)
