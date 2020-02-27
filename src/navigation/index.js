import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import studentDashboard from './dashboards/studentDashboard';
import loginStack from './login';

const rootNavigator = createSwitchNavigator({
    loginStack,
    studentDashboard,
}, {
    initialRouteName: 'loginStack',
    headerMode: 'none',
})

export default createAppContainer(rootNavigator);
