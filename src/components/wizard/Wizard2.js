import React from 'react'
import{Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getAll} from '../../ducks/reducer'

class Wizard2 extends React.Component{
    constructor(){
        super()
        this.state = {
            img: '',
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

    render(){
        return(
            <div>
                <input
                    id='img'
                    value={this.state.img}
                    name='img'
                    placeholder='Paste Image URL here'
                    onChange={e => this.handleChange(e)}
                />
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>

            </div>

        )
    }

}

function mapToStateProps(state){
    return{
        reducer:state.reducer
    }
}

export default connect(
    mapToStateProps, {getAll}
) (Wizard2)