import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MonthBox } from '../types';
import MonthBoxComponent from './MonthBox';

interface LifeGridProps {
  birthDate: Date;
  events: MonthBox[];
}

export default function LifeGrid({ birthDate, events }: LifeGridProps) {
  const calculateMonths = () => {
    const now = new Date();
    const months: MonthBox[] = [];
    const startDate = new Date(birthDate);
    
    while (startDate <= now) {
      months.push({
        date: new Date(startDate),
        isFilled: startDate < now,
        isCurrent: startDate.getMonth() === now.getMonth() && 
                  startDate.getFullYear() === now.getFullYear(),
        events: []
      });
      startDate.setMonth(startDate.getMonth() + 1);
    }
    
    return months;
  };

  const monthsData = calculateMonths();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {monthsData.map((month, index) => (
          <MonthBoxComponent
            key={index}
            month={month}
            onPress={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
});