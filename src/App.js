import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// 导入组件

// 导入页面组件
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置默认路由 */}
        <Route path="/" exact render={() => <Redirect to="/home" />}></Route>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  )
}

export default App;
