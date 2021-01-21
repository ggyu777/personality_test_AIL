import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' // 요게 App.js파일을 뜻함
import { colors } from './components/utils/_var'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

// global styles
injectGlobal`
  body {
    background-color: ${colors.$colorBoldRed};
    color: #fff;
  }
`

ReactDOM.render(<App />, document.getElementById('root')) // 여기서 <App />가 App.js파일을 뜻함, root는 index.html에 있는 아이디 값
registerServiceWorker()
