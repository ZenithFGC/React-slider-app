import './App.css';
import React from 'react';
import  Elements1  from './elements1';
import  Elements2  from './elements2';
import  Elements3  from './elements3';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: ["first", "second", "third",],
            activeIndex: 1,
            height: 0,
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        
    }
    nextSlide = function() {
        this.setState({
            activeIndex: this.state.activeIndex + 1,
        })
        if (this.state.activeIndex === this.state.slider.length) {
            this.setState({
              activeIndex: this.state.activeIndex - this.state.slider.length + 1,
            })
          }
    };
    prevSlide = function() {
        this.setState({
            activeIndex: this.state.activeIndex - 1,
        })
        if (this.state.activeIndex === 1) {
            this.setState({
              activeIndex: this.state.activeIndex + this.state.slider.length - 1,
            })
          }
    };
   
    render() {
        
        return (
            <div>
                <div  className="slider-wrapper">
                    <ul className={"slider" + this.state.activeIndex}>
                        {this.state.slider.map(function(item,index) {
                            return (
                             <li key={item.id} className={index+1 === this.state.activeIndex ? 'slider-item' + index : 'slider-item' + index}>
                             { this.state.activeIndex === 1 ? <Elements1/> : 
                                    this.state.activeIndex === 2 ? <Elements2/> : <Elements3/> }
                                </li>
                            )
                        },this)}
                    </ul>
                </div>
                <div className="buttons-wrapper">
                    <button className="prev-button" onClick={this.prevSlide}></button>
                    <button className="next-button" onClick={this.nextSlide}></button>
                </div>
                <div className="indicators-wrapper">
                    <ul className="indicators">
                        {this.state.slider.map(function(item,index) {
                            return (
                                <li className={index+1 === this.state.activeIndex ? 'active-indicator' : ''}
                                onClick={this.clickIndicator}>{index+1}</li>
                            )
                            },this) 
                            
                        }
                    </ul> 
                </div>
            </div>
        );
    }
}
export default App;
