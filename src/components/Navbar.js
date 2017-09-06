import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './Navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      menuToggle: true
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  toggleMenu() {
    this.setState({
      menuToggle: !this.state.menuToggle,
    });
  }

  handleToggle(ele) {
    console.log(ele);
    return ele ? (ele.hidden = this.state.menuToggle) : null;
  }

  componentDidMount() {
  }

  render() {
    const menu = (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode={this.props.direction}
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
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
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    )

    if(!this.props.direction) {
      return (
        <div>
          <div className="app-menu-bar-collapse">
            <Icon type="bars" onClick={this.toggleMenu.bind(this)} />
          </div>
          <div ref = {this.handleToggle.bind(this)}>
            {menu}
          </div>
        </div>
      );
    }else{
      return menu;
    }

  }
}


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "horizontal",
    }
  }

  handleScreen = (e) => {
    if(document.body.offsetWidth > 800) {
      this.setState({
        direction: "horizontal",
      });
    }else{
      this.setState({
        direction: "",
      });
    }
  }

  componentDidMount() {
    this.handleScreen();
    window.addEventListener('resize', this.handleScreen.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreen.bind(this))
  }

  render() {
    return (
      <ResponsiveMenu direction={this.state.direction}></ResponsiveMenu>
    );
  }
}

export default Navbar;