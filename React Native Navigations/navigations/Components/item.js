import React from 'react';
import {Text,View} from 'react-native'

export default function Item(props) {
  return (
    <>
    {console.log(props)}

<Text>{props.navigation.state.params.item}</Text>
    </>
  );
}
