import React, {Component} from 'react'

class AvatarGenerator extends Component{
    state = {
        image: [],
        voteCount: null
    }

    componentDidMount = () => {
        fetch("https://picsum.photos/v2/list")
            .then (response => response.json())
            
            .then (data => {
                this.setState ({ image: data })
                console.log(this.state.image)
            })

            .catch(error => {
                console.error('Error: ', error)
            })
            
    }

    componentDidUpdate = () =>{
        const ImgArray = this.state.image

        let randImg = ImgArray.length, temp, index;
    
    // While there are elements in the array
        while (randImg > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * randImg);
    // Decrease ctr by 1
            randImg--;
    // And swap the last element with it
            temp = ImgArray[randImg];
            ImgArray[randImg] = ImgArray[index];
            ImgArray[index] = temp;
        }
        return ImgArray
    }

    handleClick = () =>{
        this.setState ((prevState)=>{
            return {
                voteCount:prevState.voteCount + 1
            }
        })
    }
    

    render (){
        const {url, author, id} = this.state.image 
        console.log ()
        
        return (
            <div className = "wrapper col-md-8">
                <img 
                src = {(this.props.url)} 
                className = "rounded-circle"
                />

                <h4>{this.state.author}</h4>

                <button className = "btn btn-success" onClick = {this.handleClick}>Vote</button>
                
                <span>Result {this.state.voteCount}</span>
            </div>
        )
    }
}

export default AvatarGenerator
