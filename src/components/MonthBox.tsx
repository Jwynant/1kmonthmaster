import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MonthBox } from '../types';

interface MonthBoxProps {
  month: MonthBox;
  onPress: () => void;
}

export default function MonthBoxComponent({ month, onPress }: MonthBoxProps) {
  const scale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (month.isCurrent) {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [month.isCurrent]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          styles.box,
          month.isFilled && styles.filled,
          month.isCurrent && styles.current,
          { transform: [{ scale }] },
          month.season && { backgroundColor: month.season.color },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  filled: {
    backgroundColor: '#e0e0e0',
  },
  current: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
});