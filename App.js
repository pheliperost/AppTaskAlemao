/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
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
  Button,
} from 'native-base';
import ScrollViewCheckBox from './Screens/ScrollViewCheckBox';

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



const App = () => {
  //const [checkB, setCheckB] = useState()
  const [groupValues, setGroupValues] = React.useState([{serie: 'a', checkfala: 'a', checkleitura: 'as'}]);
  const [onChangeValue, setOnChangeValue] = React.useState(30);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(30);

  const meuloopfunction = propsvalue => {
    const myloop = [];
    const numFinal = propsvalue;
    for (let i = 0; i < numFinal; i++) {      
      const _checkfala = [i ,"fala"].join();
      const _checkleitura = [i ,"leitura"].join();
      myloop.push({serie: i, checkfala: _checkfala, checkleitura: _checkleitura});
      
    }
    setGroupValues(myloop);
  };

  useEffect(() => {
    meuloopfunction(30);
    console.log("groupValues");
    console.log(groupValues);
  }, []);

  return (
    
    <NativeBaseProvider>
      <HStack space={3} alignItems="flex-end">
        <ToggleDarkMode />
      </HStack>
      <HStack space={1} alignItems="center">
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
        </Stack>
        
      </HStack>
      
      <Button small primary onPress={() => meuloopfunction(onChangeEndValue)}>
        <Text>Aplicar Filtro</Text>
      </Button>
      <ScrollViewCheckBox valores={groupValues} />
      <Button small primary onPress={() => setGroupValues([])}>
        <Text>Limpar</Text>
      </Button>
    </NativeBaseProvider>
  );
};
export default App;
