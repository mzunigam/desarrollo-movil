import {NavigationContainer} from "@react-navigation/native";
import Router from "./Router/router";

const App = () => {

    return (
            <NavigationContainer independent={true}>
                <Router/>
            </NavigationContainer>
    );

}

export default App;