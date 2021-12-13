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
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

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


export const Example = () => {
  const [groupValues, setGroupValues] = React.useState([])
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose numbers"
    >
      <Checkbox value="one" my={2}>
        Fala
      </Checkbox>
      <Checkbox value="two">Leitura</Checkbox>
    </Checkbox.Group>
  )
}

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
            <Example />
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
