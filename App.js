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
  ScrollView,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import uuid from 'react-native-uuid';

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

export const Slid = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(1);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(1);
  return (
    <Stack mx={5} space={4} alignItems="center" w="100%">
      <Box mx={5} w="250">
        <Text>onChangeValue - {onChangeValue}</Text>
        <Text>onChangeEndValue - {onChangeEndValue}</Text>        
          <Slider
          defaultValue={3}
            colorScheme="cyan"
            onChange={v => {
            setOnChangeValue(Math.floor(v));
            }}
          onChangeEnd={v => {
              setOnChangeEndValue(Math.floor(v));
           }}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
          </Slider>
        <ScrollView
          _contentContainerStyle={{
            px: '20px',
            mb: '4',
            minW: '72',
          }}>
          {meuloopfunction(onChangeEndValue)}
        </ScrollView>
      </Box>
    </Stack>
  );
};

export const CheckB = props => {
  const [groupValues, setGroupValues] = React.useState([]);
  var RandomNumberGroup = uuid.v4();
  var RandomNumberItem1 = uuid.v4();
  var RandomNumberItem2 = uuid.v4();
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers" 
      key={RandomNumberGroup}>
      <Text>Série {props.chave}</Text>
      <Checkbox value="one" key={RandomNumberItem1}>
        Fala
      </Checkbox>
      <Checkbox value="two" key={RandomNumberItem2}>
        Leitura
      </Checkbox>
    </Checkbox.Group>
  );
};

const meuloopfunction = propsvalue => {
  const myloop = [];
  const numFinal = propsvalue;
  for (let i = 0; i < numFinal; i++) {
    myloop.push(<CheckB chave={i} key={i} />);
  }
  return myloop;
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
            <Slid />
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
