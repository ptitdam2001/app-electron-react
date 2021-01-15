import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Feed } from './pages/Feed';
import { Menu } from './features/core/Menu/Menu.component';
import { MenuContent } from './features/core/Menu/MenuContent.type';

function App() {
  const menuItems: MenuContent[] = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/feed',
      label: 'Feed'
    }
  ]
  return (
    <div className="App">
      <Router>
        <header>
          <Menu items={menuItems} />
        </header>
        <section>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route component={Home} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
