import React, {Component} from 'react'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class TopMenu extends Component {
    state = {current: 'mail'}
    handleClick = (e) => {
        console.log('click',e)
        this.setState({
            current: e.key
        })
    }
    render() {
        return (
          <Menu onClick={this.handleClick}
          selectedKeys={[this.state.current]} mode="horizontal"
          theme="dark" style={{'backgroundColor': 'transparent', 'borderBottom': 'transparent', 'float': 'right', 'marginTop': 18}}>
            <Menu.Item key="mail">
              <Icon type="mail" />个人中心
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />预约平台
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />产品列表</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">设置</a>
            </Menu.Item>
          </Menu>
        );
    }
}