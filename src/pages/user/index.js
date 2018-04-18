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
        
        return (
            <div className="content">
                user
                <Link to="/">index</Link>
            </div>
        )
    }
}

export default connect(({user:{current}}) => ({current}))(Index)