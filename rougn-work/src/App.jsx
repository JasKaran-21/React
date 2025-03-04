import { useState, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RealTimeInputDisaplay from './components/RealTimeInput'
import ToggleSwitch from './components/ToggleSwitch'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
 
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default App;

