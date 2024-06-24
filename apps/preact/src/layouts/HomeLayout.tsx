import { Outlet } from "react-router-dom";
import { View, XStack } from "tamagui";
import {Sidebar} from "app/components/Sidebar";



const HomeLayout = () => {
  return (
    <>
      <View>
        <XStack>
          <Sidebar />
          <Outlet />
        </XStack>
      </View>
    </>
  );
};

export default HomeLayout;
