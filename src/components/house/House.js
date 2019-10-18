import React from 'react'

class House extends React.Component{

    render(){
        return(
            <div>
                House
                <div className='houses'>
                    <div>
                        <img src={this.props.img} alt='Image Not Found' height='100px' width='150px'/>
                    </div>
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                    <p>{this.props.city}</p>
                    <p>{this.props.state}</p>
                    <p>{this.props.zip}</p>
                    <p>{this.props.mortgage}</p>
                    <p>{this.props.rent}</p>
                    <button
                        onClick={() => this.props.deleteOne(this.props.id)}
                    >X</button>

                </div>
            </div>

        )
    }
}

export default House