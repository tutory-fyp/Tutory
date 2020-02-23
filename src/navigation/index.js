import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import studentDashboard from './dashboards/studentDashboard';
import loginStack from './login';

const rootNavigator = createSwitchNavigator({
    loginStack,
    studentDashboard,
}, {
    initialRouteName: 'studentDashboard',
    headerMode: 'none',
})

export default createAppContainer(rootNavigator);
