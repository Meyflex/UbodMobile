import React, { FC } from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';

// Define interfaces for the props
interface NutrimentsPortion {
  'energy-kcal'?: number;
  [key: string]: any;
}

interface Value {
  _id?: string;
  product_name?: string;
  nutrimentsportion: NutrimentsPortion;
  portion: number;
}

interface FoodElementProps {
  value: Value;
  onPress: () => void;
}

const FoodElement: FC<FoodElementProps> = ({ value, onPress }) => {
  const name = value.product_name ?? 'product n° ' + value._id;
  const energy = value.nutrimentsportion?.['energy-kcal'] ?? '??';
  const energyUnit = value.nutrimentsportion?.['energy-kcal'] ? 'kcal' : '';

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textmain}>{name}</Text>
          <Text style={styles.textsec}> {100 * value.portion}g</Text>
        </View>
        <Text style={styles.textsec}>
          {energy} {energyUnit}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: Dimensions.get('window').width * 0.025,
    paddingVertical: 13,
    paddingHorizontal: Dimensions.get('window').width * 0.04,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',

  },
  textmain: {
    color: 'black',
    fontSize: 14,
  },
  textsec: {
    color: '#AAA',
    fontSize: 14,
  },
});

export default FoodElement;
