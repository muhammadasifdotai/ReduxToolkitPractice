/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// store ko add krni ki best practice ya hay kay hum index.js may krain q kay App.js may kbhi zaroorat pr sakti hay k hum nay jo reducers create keyee hay, jo slice create ki hay, action create kyee hotay hay un ko use krnay ki.
// .. to best approach ya hay kay index.js may jayeen or waha is ko add krain.
// () : direct round bracket lagwa rhay hay is ka matlab hay k direct return krwa rhay hay. to is leyee return likhnay ki zaroorat bhi nhi hay.

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
