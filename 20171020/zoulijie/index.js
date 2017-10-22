import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

@renderSafe
class Timer extends React.Component{
    constructor() {
        super();
        console.log('constructor')
        this.state = {
            a:0
        }
    }
    
    componentWillMount() {
        console.log('componentWillMount')
       // this.setState({a:2})
    }
    componentDidMount() {
      
        console.log('componentDidMount')
        //this.setState({a:2})
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        this.setState({a:2})
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')

    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
        this.setState({a:3})
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        this.setState({a:2})
    }

    handleClick = () =>{
        this.setState({
            a: 3
        });
    }
    render() {
        return (
            <div onClick={this.handleClick}> 
                {this.props.color}
            </div>);
    }
}


ReactDOM.render(<Timer color={"请看控制台"} />, document.getElementById('root'));
registerServiceWorker();

function renderSafe(target){
    const _self = target.prototype
    test(_self,"componentWillMount")
    test(_self,"componentDidMount")
    test(_self,"componentWillReceiveProps")
    test(_self,"shouldComponentUpdate")
    test(_self,"componentDidUpdate")
    test(_self,"componentWillUnmount")
}
function test(prototype,lifecycleName){
    const oldLifecycleFn = prototype[lifecycleName]
    prototype[lifecycleName] = function(){
        try {
            return  oldLifecycleFn.apply(this,arguments)
         } catch (error) {
             console.log(error)
             return function(){}
         }
    }
}
