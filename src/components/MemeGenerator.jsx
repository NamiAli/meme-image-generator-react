import React, { Component } from 'react';
import img from '../images/memeimg.jpg'
class MemeGenerator extends Component {
   
    constructor(){
    	super();
    	this.state = {
    		topText: '',
    		bottomText: '',
    		randomImage: img,
    		allMemeImgs: []
    	}
    }

    componentDidMount(){
    	fetch('https://api.imgflip.com/get_memes')
    	.then(response => response.json())
    	.then(response => {
    		const {memes} = response.data
    		
    		this.setState({allMemeImgs: memes})
    	})
    }

   
    handleSubmit = evt => {
            evt.preventDefault();
            const random = Math.floor(Math.random() * this.state.allMemeImgs.length)
            const randomMemeImg = this.state.allMemeImgs[random].url
            this.setState({randomImage: randomMemeImg})

    }
    render() {
        return (
          <div>
             <form className="meme-form" onSubmit={(e) => this.handleSubmit(e)}>
             	
             	   <button >Gen</button>
             </form>
             <div className='meme'>
             		<img src={this.state.randomImage} />

             </div>
          </div>
        );
    }
}

export default MemeGenerator;
