import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, Icon} from '@antd';
import './index.css'
const userClick = ({key}) => {
    console.log(key)
}
const menu = (
    <Menu onClick={userClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
    </Menu>
)

export default class Public_header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="header clearfix">
                <div className="hd_left fl">
                    <span className="hd_logo fl">移动应用权限检查仿真系统</span>



                </div>
                <div className="hd_userbox fr">
                    {/* <div className="hd_search fl">
                        <Search
                            className="hd_search_input"
                            placeholder="搜索热词"
                            style={{
                            width: 190
                        }}
                            onSearch={value => console.log(value)}/>
                    </div> */}
                    <div className="hd_userinfo fl">
                        <img
                            src="https://wiki.avlyun.org/s/zh_CN/5989/aaad9997c145089d7f38b9dea0ac5b91728ef55a.11/_/download/attachments/47382816/user-avatar?version=1&modificationDate=1510829540020&api=v2"
                            className="hd_avatar"
                            alt=""/> {/* <span className="hd_email">chengkun@antiy.cn</span> */}
                        <Dropdown overlay={menu} className="hd_email">
                            <a className="ant-dropdown-link nav-dropdown" href="#">
                                chengkun@antiy.cn
                                <Icon type="down"/>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}