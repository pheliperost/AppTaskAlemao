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
import { Alert } from 'react-native';
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

export const Slid = props => {
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
          {meuloopfunction(onChangeEndValue)}
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
      </Slider>
        <Divider my="2" />
       
    </Stack>
  );
};

export const ScrollViewCheckBox = props => {
  return(
    <Box mx={1} h="300" w="350">
      <ScrollView  
        _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
      }}
      space={3}> 
            {props.valores.map((item)=>(
               <View>
                  <Text>Série {item.serie + 1}</Text>
                  <Checkbox value="one" key={item.checkfala}>
                    Fala
                  </Checkbox>
                  <Checkbox value="one" key={item.checkleitura}>
                    Leitura
                  </Checkbox>
               </View>
               )) }
             
      </ScrollView> 
    </Box>
  );
};



const App = () => {
  //const [checkB, setCheckB] = useState()
  const [groupValues, setGroupValues] = React.useState([{serie: 'a', checkfala: 'a', checkleitura: 'as'}]);
  const [onChangeValue, setOnChangeValue] = React.useState(30);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(30);

  const meuloopfunction = propsvalue => {
    const myloop = [];
    const numFinal = propsvalue;
    for (let i = 0; i < numFinal; i++) {
      const _serie = [i].join();
      const _checkfala = [i ,"fala"].join();
      const _checkleitura = [i ,"leitura"].join();
      //myloop.push(<CheckB chave={i} key={i} />);
      myloop.push({serie: i, checkfala: _checkfala, checkleitura: _checkleitura});
      
    }
    setGroupValues(myloop);
  };

  useEffect(() => {
  //  meuloopfunction(5);
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
