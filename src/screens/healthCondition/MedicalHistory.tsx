import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Header from '../../components/header/Header';
import {ScrollView} from 'react-native';
import PatientElements from '../../components/PatientElements';
import {MedicalHistoryItems} from '../../assets/MedicalHistoryItems';

const MedicalHistory = ({navigation}: any) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.GhostWhite,
          position: 'relative',
        }}>
        <Header title="Medical history" />
        <ScrollView>
          <View style={{paddingVertical: 12, width: '94%', margin: 'auto'}}>
            {MedicalHistoryItems.map((item, i) => (
              <PatientElements
                key={i}
                name={item.title}
                element={
                  item.image ? (
                    item.image
                  ) : (
                    <Image
                      source={item.img}
                      style={{width: 30, objectFit: 'contain'}}
                    />
                  )
                }
                color="black"
                customStyle={{
                  paddingVertical: 20,
                  borderRadius: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.LightGray,
                  borderTopRightRadius: i === 0 ? 10 : 0,
                  borderTopLeftRadius: i === 0 ? 10 : 0,
                  borderBottomLeftRadius:
                    i === MedicalHistoryItems.length - 1 ? 10 : 0,
                  borderBottomRightRadius:
                    i === MedicalHistoryItems.length - 1 ? 10 : 0,
                }}
                onPress={() => navigation.navigate(item.path)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default MedicalHistory;

const styles = StyleSheet.create({
  box: {},
});
