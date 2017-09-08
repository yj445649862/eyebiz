import {render} from 'react-dom'
import React from 'react'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import HomePage from 'views/Index'
import {Provider} from 'react-redux'
import store from 'src/redux/store'
import 'antd/dist/antd.css'
import 'assets/common.css'
const _  = require('lodash');
render(
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter basename="/eyebiz">
                <HomePage></HomePage>
            </BrowserRouter>
        </Provider>
    </AppContainer>
    ,document.getElementById('root'));
