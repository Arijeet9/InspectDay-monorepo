import '@tamagui/core/reset.css'
import { Link } from "react-router-dom";


import {
  View,
  Text,
  Image,
  YStack,
  XStack,
  Button,
  styled,
  Avatar,
} from "tamagui";

import {
  LayoutDashboard,
  Search,
  Library,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  CalendarCheck2,
} from "@tamagui/lucide-icons";
import { useState } from "preact/hooks";

const Divider = styled(View, {
  w: 2,
  h: "100%",
  bc: "#E5E7EB",
});

const CustomText=styled(Text,{
  col:"#2D3430",
  fs:"$2",
  hoverStyle:{
    col:"#010101"
  }
})

const CustomButton = styled(Button, {
  w:"100%",
  bc: "#F9F9F9",
  jc: "start",
  // ai: "center",
  // gap: "$0.75",
  hoverStyle: {
    bc: "#E5E7EB",
    borderLeftWidth: 4,
    borderLeftColor: "#2D3430",
  },
  focusStyle: {
    bc: "#E5E7EB",
    borderLeftWidth: 4,
    borderLeftColor: "#2D3430",
  },
});

export function Sidebar () {
  const [organizationDropdown, setOrganizationDropdown] = useState(false);
  const [libraryDropdown, setLibraryDropdown] = useState(false);
  return (
    <View p="$4" jc="space-between" space="$4" minHeight="100vh" minWidth="$20" h="100vh" w="25vw" overflow="scroll"  bc="#F9F9F9"   >
      <YStack space="$4">
        <XStack jc="start" ai="center" space="$1">
          <Image
            source={{
              uri: "/inspect-day.svg",
              width: 50,
              height: 50,
            }}
          />
          <CustomText>Inspect day</CustomText>
        </XStack>
        <YStack space="$1">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <CustomButton icon={<LayoutDashboard size="$1" color="#2D3430" />}>
            <CustomText col="#2D3430">Dashboard</CustomText>
          </CustomButton>
          </Link>
          <Link to="/inspection" style={{ textDecoration: "none" }}>
          <CustomButton icon={<Search size="$1" color="#2D3430" />}>
            <CustomText col="#2D3430">Inspection</CustomText>
          </CustomButton>
          </Link>
          <Link to="/leads" style={{ textDecoration: "none" }}>
          <CustomButton icon={<CalendarCheck2 size="$1" color="#2D3430" />}>
            <CustomText col="#2D3430">Leads</CustomText>
          </CustomButton>
          </Link>
          <YStack space="$4">
            <CustomButton icon={<Library size="$1" color="#2D3430" />} onPress={() => setLibraryDropdown(!libraryDropdown)}>
              <CustomText col="#2D3430">Library</CustomText>
              {libraryDropdown ? <ChevronUp color="#2D3430" /> : <ChevronDown color="#2D3430" />}
            </CustomButton>
            {libraryDropdown && (
              <XStack pl="$8" space="$6">
                <Divider />
                <YStack space="$4">
                  <CustomText>Inspection Template</CustomText>
                  <CustomText>Categories & Items</CustomText>
                  <CustomText>Property Types</CustomText>
                </YStack>
              </XStack>
            )}
          </YStack>

          <YStack space="$4">
            <CustomButton
            icon={<Settings size="$1" color="#2D3430" />}
              onPress={() => setOrganizationDropdown(!organizationDropdown)}
            >
              <CustomText col="#2D3430">Organization</CustomText>
              {organizationDropdown ? <ChevronUp color="#2D3430" /> : <ChevronDown color="#2D3430" />}
            </CustomButton>
            {organizationDropdown && (
              <XStack pl="$8" space="$6">
                <Divider />
                <YStack space="$4">
                <CustomText>Company Profile</CustomText>
                <CustomText>Users</CustomText>
                <CustomText>Biling Plan</CustomText>
                <CustomText>Lead Capture Form</CustomText>
                <CustomText>Audit Log</CustomText>
              </YStack>
              </XStack>

            )}
          </YStack>
        </YStack>
      </YStack>
      <XStack
        px="$2"
        py="$3"
        ai="center"
        jc="space-between"
        borderRadius="$4"
        backgroundColor="#F1F1F1"
      >
        <XStack space="$4" ai="center">
          <Avatar circular size="$3.5">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack>
            <Text fontSize="$2" col="#2D3430">Alisa david</Text>
            <Text fontSize="$1" col="#5E5E5E">alisadavid@gmail.com</Text>
          </YStack>
        </XStack>
        <ChevronRight size="$2" color="#2D3430" />
      </XStack>
    </View>
  );
};

