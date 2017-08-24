import { StackNavigator } from 'react-navigation';
import Home from "../component/home";
import About from "../component/about";

const Router = StackNavigator({
    Homeroute: {
        screen: Home
    },
    Aboutroute: {
        screen: About
    }
})

export default Router