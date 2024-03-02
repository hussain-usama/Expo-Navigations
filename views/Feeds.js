import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Feeds({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>News Feeds</Text>
      <Button
        title="View Articles"
        onPress={() => {
          navigation.navigate('Article');
        }}
      />
    </View>
  );
}
