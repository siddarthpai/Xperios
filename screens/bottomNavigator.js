import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "./Events";
import Travel from "./Travel";
import Hobbies from "./Hobbies";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Hobbies" component={Hobbies} />
      <Tab.Screen name="Travel" component={Travel} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
