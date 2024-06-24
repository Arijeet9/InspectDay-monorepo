import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { View, XStack } from "tamagui";



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
