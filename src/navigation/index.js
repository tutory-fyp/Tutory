import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
    studentDashboard,
    tutorDashboard,
    parentDashboard,
} from './dashboards';
import loginStack from './login';

const rootNavigator = createSwitchNavigator({
    loginStack,
    studentDashboard,
    tutorDashboard,
    parentDashboard,
}, {
    initialRouteName: 'loginStack',
    headerMode: 'none',
})

export default createAppContainer(rootNavigator);
