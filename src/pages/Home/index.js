import React from 'react'
// 导入路由
import { Route } from 'react-router-dom'

// 导入分页组件
import Index from '../Index'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'

// 导入TabBar
import { TabBar } from 'antd-mobile'

// 导入组件自己的样式文件
import './index.css'

// TabBar数据
const tabItems = [{
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
},
{
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
},
{
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
},
{
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
}]

export default class Home extends React.Component {
    state = {
        // 默认选中格挡TabBar菜单
        selectedTab: this.props.location.pathname
    }

    // 封装渲染每一项TabBar
    renderTabBarItem = () => {
        return tabItems.map(item => {
            return (
                <TabBar.Item
                    title={item.title}
                    key={item.title}
                    icon={
                        <i className={`iconfont ${item.icon}`}></i>
                    }
                    selectedIcon={<i className={`iconfont ${item.icon}`}></i>
                    }
                    selected={this.state.selectedTab === item.path}
                    onPress={() => {
                        this.setState({
                            selectedTab: item.path,
                        });
                        this.props.history.push(item.path)
                    }}
                >
                </TabBar.Item>
            )
        })
    }

    render() {
        return (
            <div className="home">
                {/* 渲染子路由 */}
                <Route exact path="/home" component={Index}></Route>
                <Route path="/home/list" component={HouseList}></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/profile" component={Profile}></Route>

                {/* TabBar */}
                <TabBar
                    tintColor="#21b97a"
                    barTintColor="white"
                    noRenderContent={true}
                >
                    {this.renderTabBarItem()}
                </TabBar>
            </div>
        )
    }
}