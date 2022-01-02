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
  View,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

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

export const CheckB = props => {
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers">
      <Checkbox value="one">Fala</Checkbox>
      <Checkbox value="two">Leitura</Checkbox>
    </Checkbox.Group>
  );
};

export const Slid = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(10);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(10);
  return (
    <Stack mx={5} space={4} alignItems="center" w="100%">
      <Text>onChangeValue - {onChangeValue}</Text>
      <Text>onChangeEndValue - {onChangeEndValue}</Text>

      <Box mx={5} w="250">
        <Slider
          defaultValue={3}
          colorScheme="cyan"
          onChange={v => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={v => {
            v && setOnChangeEndValue(Math.floor(v) && meuloopfunction(v));
          }}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Stack>
  );
};

const meuloopfunction = propsvalue => {
  const myloop = [];
  const numFinal = propsvalue;
  for (let i = 0; i < numFinal; i++) {
    myloop.push(<CheckB key={i} />);
  }
  return myloop;
};

export const Repeater = () => {
  return <Center>{meuloopfunction}</Center>;
};
const App = () => {
  return (
    <NativeBaseProvider>
      <HStack space={3} alignItems="flex-end">
        <ToggleDarkMode />
      </HStack>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <HStack space={2} alignItems="center">
            {Repeater}
            <Slid />
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
