import React from 'react'
import House from '../house/House'
import {Link} from 'react-router-dom'
import axios from 'axios'



class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            houseList: []
        }
    }

    componentDidMount = () => {
        this.getAll()
    }

    

    getAll = () => {
        axios.get('/api/houses')
        .then(res =>
            this.setState({
                houseList: res.data
            })
        )
        .catch(err => console.log(err, 'problems with front end get all'))          
    }

    deleteOne = (id) => {
        axios.delete(`/api/deleteOne/${id}`)
        this.getAll()

    }

    render(){
        console.log(this.state.houseList);
        
        return(
            <div>
                Dashboard
                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>

                <div>
                    {this.state.houseList.map((element) => {
                        return(
                            <House
                                key={element.id}
                                id={element.id}
                                img={element.img}
                                name={element.name}
                                address={element.address}
                                city={element.city}
                                state={element.state}
                                zip={element.zip}
                                mortgage={element.mortgage}
                                rent={element.rent}
                                deleteOne={this.deleteOne}

                            />
                            
                        )



                    })}

                </div>

            </div>
        )
    }
}

export default Dashboard