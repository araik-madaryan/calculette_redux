import React, { Component } from 'react';
import { connect } from 'react-redux';


const one = {type:'1'}
const two = {type:'2'}
const three = {type:'3'}
const four = {type:'4'}
const five = {type:'5'}
const six = {type:'6'}
const seven = {type:'7'}
const height = {type:'8'}
const nine = {type:'9'}
const zero = {type:'0'}
const point = {type:'.'}
const add = {type:'ADD'}
const sub = {type:'SUB'}
const multi= {type:'MULTI'}
const divid= {type:'DIVID'}
const total = {type:'TOTAL'}

class Calculator extends Component {
    render() {
      const { computer, dispatch } = this.props;
        return (
            <div className="Calculator" >
                <input readOnly value={computer} />
                <div className="bloc1">
                    <button className="slash" value="/" name="slash" onClick={() => dispatch(divid)}>/</button>
                    <button className="neuf" value="9" name="neuf" onClick={() => dispatch(nine)}>9</button>
                    <button className="huit" value="8" name="huit" onClick={() => dispatch(height)}>8</button>
                    <button className="sept" value="7" name="sept" onClick={() => dispatch(seven)}>7</button>
                </div>
                <div className="bloc2">
                    <button className="x" value="*" name="x" onClick={() => dispatch(multi)}>x</button>
                    <button className="six" value="6" name="six" onClick={() => dispatch(six)}>6</button>
                    <button className="cinq" value="5" name="cinq" onClick={() => dispatch(five)}>5</button>
                    <button className="quatre" value="4" name="quatre" onClick={() => dispatch(four)}>4</button>
                </div>
                <div className="bloc3">
                    <button className="moins" value="-" name="moins" onClick={() => dispatch(sub)}>-</button>
                    <button className="trois" value="3" name="trois" onClick={() => dispatch(three)}>3</button>
                    <button className="deux" value="2" name="deux" onClick={() => dispatch(two)}>2</button>
                    <button className="un" value="1" name="un" onClick={() => dispatch(one)}>1</button>
                </div>
                <div className="bloc4">
                    <button className="plus" value="+" name="plus" onClick={() => dispatch(add)}>+</button>
                    <button className="egal" value="=" name="egal" onClick={() => dispatch(total)}>=</button>
                    <button className="point" value="." name="point" onClick={() => dispatch(point)}>.</button>
                    <button className="zero" value="0" name="zero " onClick={() => dispatch(zero)}>0</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    computer: state
  });

const CalContainer = connect(mapStateToProps)(Calculator)

export default CalContainer;