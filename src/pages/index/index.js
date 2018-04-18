import React, {Component} from 'react'
import {
    Row,
    Col,
    Card,
    Button,
    Icon,
    Input,
    Table,
    Divider,
    Modal,
    Form
} from 'antd'
import {Link} from 'dva/router'
import { connect } from 'dva';
import './index.css'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1
        }
    }
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        const {current,dispatch} = this.props
        return (
            <div className="content">
                <Link to="/user">user</Link>
                <p>hellodsdsd</p>
                <div>{current}</div>
                
                <button onClick={() => dispatch({type: 'global/test',payload:2000})}>+1</button>
            </div>
        )
    }
}

export default connect(({global:{current}}) => ({current}))(Index)