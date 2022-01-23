/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
  const [groupValues, setGroupValues] = useState([
    {serie: 'a', checkfala: 'a', checkleitura: 'as'}
  ]);

  const [checkboxItens, setCheckboxItens] = React.useState([
   ]);
  
  /*  const [checkboxItens, setCheckboxItens] = React.useState([
    {serie: 0, key: 0, index: 0},
    {serie: 1, key: 1, index: 1},
    {serie: 2, key: 2, index: 2},
    {serie: 3, key: 3, index: 3},
    {serie: 4, key: 4, index: 4},
  ]); */
  const [onChangeValue, setOnChangeValue] = React.useState(30);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(30);

  const meuloopfunction = propsvalue => {
    const myloop = [];
    const numFinal = propsvalue;
    for (let i = 0; i < numFinal; i++) {
      myloop.push({
        serie: i
      }); 

    }
    setCheckboxItens(myloop);
  };


  const CheckBoxDinamico = (item) => {
    console.log("check di");
    console.log(item.item.serie);
    return (
      <View>
        <Text>Série {item.item.serie+1}</Text>
        <Checkbox value="one" key={item.item+0.1}>
          Fala
        </Checkbox>
        <Checkbox value="one" key={item.item+0.2}>
          Leitura
        </Checkbox>
      </View>
    );
  };

  useEffect(() => {
    meuloopfunction(30)
  },[]);

  return (
    <NativeBaseProvider>
      <HStack space={3} alignItems="flex-end">
        <ToggleDarkMode />
      </HStack>
      <HStack space={1} alignItems="center">
        <Stack mx={5} space={3} alignItems="baseline" w="85%">
          <Box w="100%" my="3" alignItems="center">
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
      <ScrollView>
      {checkboxItens.map(item => {
        return (
          <CheckBoxDinamico item={item} />
        );
      })}
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default App;
