import React from 'react'
import {render} from 'react-dom'
import dva from 'dva'
import createHistory from 'history/createHashHistory';

import './index.css'

const app = dva({
  history: createHistory()
})

app.router(require('./router').default)

app.start('#root')
