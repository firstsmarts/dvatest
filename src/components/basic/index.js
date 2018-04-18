import React,{Component} from 'react'
import './index.css'
import Left from '../left'
import Mheader from '../header'
export default class Basic extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {history} = this.props
        return(
            <div className="basiclayout">
                <Left history={history}/>
                <Mheader/>
            </div>
        )
    }
}