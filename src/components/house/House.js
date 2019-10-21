import React from 'react'

class House extends React.Component{

    render(){
        return(
            <div>
                <div className='houses'>
                    <div>
                        <img src={this.props.img} alt='Image Not Found' height='100px' width='150px'/>
                    </div>
                    <div className='houses-div2'>
                        <p className='houses-text'>{this.props.name}</p>
                        <p className='houses-text'>{this.props.address}</p>
                        <p className='houses-text'>{this.props.city}</p>
                        <p className='houses-text'>{this.props.state}</p>
                        <p className='houses-text'>{this.props.zip}</p>
                    </div>
                    <div className='houses-div3'>
                        <p className='houses-text'>{this.props.mortgage}</p>
                        <p className='houses-text'>{this.props.rent}</p>
                    </div>
                    <button
                        id='houses-delete-button'
                        onClick={() => this.props.deleteOne(this.props.id)}
                    >X</button>

                </div>
            </div>

        )
    }
}

export default House