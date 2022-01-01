/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
  Checkbox,
  Stack,
  Box,
  Slider,
  View
  
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}


export const CheckB = () => {
  const [groupValues, setGroupValues] = React.useState([])
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers">
      <Checkbox value="one" my={2}>
        Fala
      </Checkbox>
      <Checkbox value="two">Leitura</Checkbox>
    </Checkbox.Group>
  )
  }

  export const Slid = () => {
    const [onChangeValue, setOnChangeValue] = React.useState(70)
    const [onChangeEndValue, setOnChangeEndValue] = React.useState(70)
    return (
      <Stack mx={5} space={4} alignItems="center" w="100%">
        <Text>onChangeValue - {onChangeValue}</Text>
        <Text>onChangeEndValue - {onChangeEndValue}</Text>
  
        <Box mx={5} w="250">
          <Slider
            defaultValue={70}
            colorScheme="cyan"
            onChange={(v) => {
              setOnChangeValue(Math.floor(v))
            }}
            onChangeEnd={(v) => {
              v && setOnChangeEndValue(Math.floor(v) && meuloopfunction)
            }}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>
      </Stack>
    )
  }
  
const meuloopfunction = () =>{
    const myloop = [];
    const numFinal = this.onChangeEndValue;
    for(let i=1; i < numFinal; i++){
      myloop.push(
        <View key={i}>
          <Text>onChangeValue </Text>
        </View>
      )
    }
    return myloop;
  }
  
  export const Repeater = () =>{
    return(
        <Stack mx={5} space={4} alignItems="center" w="100%">
           {meuloopfunction}
        </Stack>
    );
  }
const App = () => {
  return (
    <NativeBaseProvider>
      <HStack space={3} alignItems="flex-end">
        <ToggleDarkMode />
      </HStack>
      <Box>
        <Slid/>
      </Box>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <HStack space={2} alignItems="center">
            {Repeater}
            <CheckB />
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
