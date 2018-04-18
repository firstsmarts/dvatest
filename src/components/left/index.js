import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon, Button} from '@antd';
import './index.css';
const SubMenu = Menu.SubMenu;
import menuConfig from './menu'

function getMenu(menuConfig, faUrl) {

  return menuConfig.map((item, i) => {
    if (item.children) {
      var nextUrl = faUrl
        ? `${faUrl}/${item.path}`
        : `/${item.path}`
      return (
        <SubMenu
          key={item.path}
          onOpenChange={(e) => {
          console.log(e)
        }}
          title={< span > {
          item.icon
            ? <Icon type={item.icon}/>
            : null
        } < span > {
          item.text
        } </span></span >}>
          {getMenu(item.children, nextUrl)}
        </SubMenu>
      )
    }

    return (
      <Menu.Item key={item.path}>
        <Link
          to={faUrl
          ? `${faUrl}/${item.path}`
          : `/${item.path}`}>
          {item.icon
            ? <Icon type={item.icon}/>
            : null}
          <span>
            {item.text}</span>
        </Link>
      </Menu.Item>
    )
  })

}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openList: []
    }

  }
  componentWillMount() {
    const {
      history: {
        location: {
          pathname
        }
      }
    } = this.props
    let openList = pathname
      .slice(1)
      .split('/')
    openList = openList[0]
      ? openList
      : ['index']
    this.setState({openList: openList})
  }
  render() {
    return (
      <div
        className="left_nav"
        style={{
        width: this.state.collapsed
          ? '80px'
          : '200px'
      }}>
        <div className="logobox">
          <Icon type="ant-design"/> {/* {this.state.collapsed ? '' : '仿真课程'} */}
          <span
            onClick={() => {
            this.setState({
              collapsed: !this.state.collapsed
            })
          }}
            className="togglebtn">
            <Icon
              type={this.state.collapsed
              ? 'menu-unfold'
              : 'menu-fold'}/>
          </span>
        </div>
        <Menu
          defaultSelectedKeys={this.state.openList}
          defaultOpenKeys={this.state.openList}
          onClick={(e) => {
          console.log(e)
        }}
          onOpenChange={(e) => {
            console.log(e,this.state.openList)
            if (e) {
              
            }
            if (this.state.openList.length < e.length) {
              const lastOpneKey = [e[e.length - 1]]
              this.setState({
                openList: lastOpneKey
              })
            }
        }}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}>

          {getMenu(menuConfig)}

        </Menu>
      </div>
    );
  }
}