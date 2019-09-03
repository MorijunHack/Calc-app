import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from '../store'

class Calc extends Component {
    style={
        fontSize: "12pt",
        padding: "5px 10px"
    }

    tableStyle = {
        float: "left",
        maxWidth: "70%"
    }

    reStyle = {
        float: "left"
    }

    resultStyle = {
        minWidth: "30%",
        marginTop: "70px",
    }

    contentStyle = {
        width: "100%",
        height: "300px"
    }

    constructor(props) {
        super(props);
        this.state = {
            about: '',
            description: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.doAction = this.doAction.bind(this);
        this.reset = this.reset.bind(this);
    }

    onChange(e) {
        let data = this.state
        switch (e.target.name){
            case 'about':
                data.about = e.target.value;
                break;
            case 'description':
                data.description = e.target.value;
                break;
        }
        this.setState({
            data
        });
    }

    onKeyPress(e) {
        if (event.keyCode == 13){
            this.doAction(e);
        }
    }

    doAction(e) {
        e.preventDefault();
        let action = addMemo(this.state.about, this.state.description);
        this.props.dispatch(action);
        this.setState({
            about: '',
            description: ''
        })
    }

    reset() {
        this.setState({
            about: '',
            description: ''
        });
        return this.props.dispatch({type: 'RESET'});
    }

    render() {
        let result = [];
        let n = this.props.data.length;
        for(let i=0; i<n; i++) {
            result.push(<tr key={i}>
                <th>{this.props.data[i].about}</th>
                <td>{this.props.data[i].description}</td>
                <td>{this.props.number[i]}</td>
            </tr>);
        }
        return (
            <div>
                <input type="text" name="about" style={this.style} size="30" value={this.state.about} onChange={this.onChange} placeholder="概要（時間も）" required />
                <input type="text" name="description" style={this.style} size="40" value={this.state.description} onChange={this.onChange} placeholder="詳細" required />
                <button className="button" style={this.style} onClick={this.doAction}>Enter!</button>
                <button className="button" style={this.style} onClick={this.reset}>Reset</button>
                <hr />
                <div style={this.contentStyle}>
                    <table style={this.tableStyle}>
                        <thead><tr>
                            <th>作業概要</th>
                            <th>作業詳細</th>
                            <th>時間</th>
                        </tr></thead>
                        <tbody>{result}</tbody>
                    </table>
                    <div style={this.reStyle}>
                        <h1 style={this.resultStyle}>　⇨　TOTAL: {this.props.result} hours</h1>
                    </div>
                </div>
            </div>
        )
    }
}

Calc = connect((state)=>state)(Calc);
export default Calc;