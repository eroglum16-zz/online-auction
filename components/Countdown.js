import React from "react";

class CountdownNumber extends React.Component {
    render() {
        return (
            <span style={{fontSize: '20px', fontFamily:'Verdana', display: 'block'}}>
                {this.props.number}
            </span>
        );
    }
}
class CountdownTitle extends React.Component {
    render() {
        return (
            <span style={{fontSize: '14px', fontFamily:'Courier New'}}>
                {this.props.title}
            </span>
        );
    }
}
class CountdownBox extends React.Component {
    render() {
        return (
            <div className="col-3 text-center">
                <CountdownNumber number={this.props.number} />
                <CountdownTitle title={this.props.title} />
            </div>
        );
    }
}
const secondFactor  = 1000;
const minuteFactor  = 60 * secondFactor;
const hourFactor    = 60 * minuteFactor;
const dayFactor     = 24 * hourFactor;
let intervalId;
class Countdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.parseTime();
    }
    componentDidMount() {
        intervalId = setInterval(() => {
            this.setState(this.parseTime());
        },1000);
    }
    componentWillUnmount() {
        clearInterval(intervalId);
    }
    parseTime(){
        let diff    = this.props.date ? this.props.date - Date.now() : 0;
        let day     = parseInt(diff/dayFactor);

        let hourCarry   = 24 * day;
        let hour        = parseInt(diff/hourFactor - hourCarry);

        let minuteCarry = (60 * 24 * day) + (60 * hour);
        let minute      = parseInt(diff/minuteFactor - minuteCarry);

        let secondCarry = (60 * 60 * 24 * day) + (60 * 60 * hour) + (60 * minute);
        let second  = parseInt(diff/secondFactor - secondCarry);
        return {
          day: day,
          hour: hour,
          minute: minute,
          second: second
        };
    }
    render() {
        return (
            <div className="row pr-2 pl-2">
                <CountdownBox number={this.state.day} title="GÜN" />
                <CountdownBox number={this.state.hour} title="SAAT" />
                <CountdownBox number={this.state.minute} title="DAKİKA" />
                <CountdownBox number={this.state.second} title="SANİYE" />
            </div>
        );
    }
}

export default Countdown;