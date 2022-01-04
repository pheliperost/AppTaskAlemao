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
  Divider,
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
  const [onChangeValue, setOnChangeValue] = React.useState(30);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(30);
  return (
    <Stack mx={5} space={3} alignItems="baseline" w="85%">   
      <Box w="100%" my="3"  alignItems="center">
        <Text fontSize="xl">Defina a quantidade de séries</Text>           
        <Text fontSize="xl">{onChangeValue} Itens</Text>           
      </Box>   
      <Slider
        defaultValue={30}
        minValue={0}
        maxValue={50}
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
        <Divider my="2" />
        <ScrollViewCheckBox propsChangeV={onChangeEndValue} />
    </Stack>
  );
};

export const ScrollViewCheckBox = props => {
  return(
    <Box mx={1} h="350" w="350">
      <ScrollView  
        _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
      }}
      space={3}>           
          {meuloopfunction(props.propsChangeV)}
      </ScrollView> 
    </Box>
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
      <Text>Série {props.chave + 1}</Text>
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
      <HStack space={1} alignItems="center">
        <Slid />
      </HStack>
    </NativeBaseProvider>
  );
};
export default App;
