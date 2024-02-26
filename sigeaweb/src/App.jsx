import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Label, TextInput } from 'flowbite-react'
import './assets/styles.css'
import Login from './modules/auth/Login'

import './assets/styles.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

