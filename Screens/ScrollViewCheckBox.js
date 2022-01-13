
import React, { useEffect, useState } from 'react';
import {
  Text,
  Checkbox,
  Box,
  View,
  ScrollView,
} from 'native-base';


export default  ScrollViewCheckBox = props => {
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