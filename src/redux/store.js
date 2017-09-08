/**
 * Created by andy on 2017-08-15.
 */
import {createStore} from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)
export default store