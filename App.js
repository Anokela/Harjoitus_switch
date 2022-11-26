import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

export default function App() {
  const [isEnabled, seIsEnabled] = useState(false);

  const toggleSwitch = () => seIsEnabled(previousState => !previousState)


  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        {isEnabled ? <Text>Enabled</Text> : <Text>Disabled</Text>}
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        ></Switch>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fields: {
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 30,
  },
});
