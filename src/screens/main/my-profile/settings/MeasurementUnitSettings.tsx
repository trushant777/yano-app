import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../constants/Colors';
import Header from '../../../../components/header/Header';
import { MeasurementSettingItems } from '../../../../assets/settings/SettingItem';
import DeviceItems from '../components/DeviceItems';
import MeasurementChangeCard from '../UiUpdateComponents/MeasurementChangeCard';

const MeasurementUnitSettings = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [items, setItems] = useState()

  const handlePress = (item: any) => {
    setItems(item);
    setIsClicked(true);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.GhostWhite,
        position: 'relative',
      }}>
      <Header title={'Measurement units'} />
      <ScrollView>
        <View style={{ padding: 20 }}>
          {MeasurementSettingItems.map(item => (
            <DeviceItems
              key={item.title}
              element={
                <Image
                  source={item.img}
                  height={40}
                  width={40}
                  style={{ objectFit: 'contain' }}
                />
              }
              name={item.title}
              subtitle={item.subtitle}
              customStyle={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.LightGray,
              }}
              onPress={() => handlePress(item)}
            />
          ))}
        </View>
      </ScrollView>
      {isClicked && (
        <View style={styles.afterClick}>
          <MeasurementChangeCard
            title={`${items?.title} unit`}
            active={setIsClicked}
            items={items}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MeasurementUnitSettings;

const styles = StyleSheet.create({
  afterClick: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});
