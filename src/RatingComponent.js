import * as React from 'react';
import PropTypes from 'prop-types';

class RatingComponent extends React.Component {

    static propTypes = {
        maxValue: PropTypes.number,
        value: PropTypes.number,
        onRatingUpdatedEvt: PropTypes.func
      }
    
      static defaultProps = {
        maxValue: 5
    }

      
    constructor(props){
        super(props);
        this.starList = [];
        this.value = 0;
        this.maxValue = props.maxValue;
        this.state = { starList : [] };
    }

    componentDidMount(){
       this.createStars(this.value);
    }

    setValue(newVal) {
        this.value = newVal;
        this.createStars(this.value);
        this.props.onratingupdatedevt({ detail: this.value });
    }

    createStars(starsSelected) {
        let starList = [];
        for(let i=0; i<=this.maxValue; i++) {
            if(i<=starsSelected){
            starList.push(<span key={i} className="rating" onMouseOver={()=> this.createStars(i)} onMouseOut={()=> { this.createStars(this.value) }} onClick={ ()=> this.setValue(i) } >&#x2605;</span>);
            } else {
                starList.push(<span key={i} className="rating"  onMouseOver={()=> this.createStars(i)} onMouseOut={()=> { this.createStars(this.value) }} onClick={ ()=> this.setValue(i) }>&#x2606;</span>);
            }
        }
        this.starList = starList;
        this.setState({ starList: starList });
    }

   render(){

        return (
            <div>
               {this.state.starList}
            </div>
        )
    }
}

RatingComponent.propTypes = {
    maxValue: PropTypes.number,
    value: PropTypes.number,
    onratingupdatedevt: PropTypes.func
};

export default RatingComponent;