import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/Colors';
import Header from '../../../components/header/Header';
import {DeleteIcon, EditIcon} from '../../../assets/icon/IconNames';
import DetailItems from '../components/DetailItems';
import CommonHeader from '../components/CommonHeader';
import {Image} from 'react-native';
import {staticIcons} from '../../../assets/image';
import Card from '../../main/my-profile/UiUpdateComponents/Card';

const HospitalizationDetails = ({navigation, route}: any) => {
  const [isClicked, setIsClicked] = useState(false);
  if (!route || !route.params) {
    Alert.alert('Error', 'Data not passed or invalid data passed');
    return navigation.goBack();
  }
  const data = route.params.data;
  const {name, reason, dischargeDate, admissionDate, doctorName} = data;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.GhostWhite,
        position: 'relative',
      }}>
      <CommonHeader
        title={name}
        rightComp1={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddAndEditHospitalization', {data})
            }>
            <Image
              source={staticIcons.EditPencil}
              style={{height: 22, width: 22}}
            />
          </TouchableOpacity>
        }
        rightComp2={
          <TouchableOpacity onPress={() => setIsClicked(true)}>
            <Image
              source={staticIcons.DeleteIcon}
              style={{height: 22, width: 22}}
            />
          </TouchableOpacity>
        }
        customStyle={{paddingVertical: 12,paddingTop: 55}}
      />
      <ScrollView>
        <View style={{paddingVertical: 12, width: '94%', margin: 'auto'}}>
          <View style={styles.boxStyle}>
            <DetailItems name="Name of the hospital" value={name} />
            <DetailItems name="Reason for hospitalization" value={reason} />
            <DetailItems name="Admission date" value={admissionDate} />
            <DetailItems name="Discharge date" value={dischargeDate} />
            <DetailItems
              name="Name of attending physician"
              value={doctorName}
            />
          </View>
        </View>
      </ScrollView>
      {isClicked && (
        <View style={styles.deletbuttonclick}>
          <Card
            title={'Delete hospitalization'}
            children={'Are you sure you want to delete this hospitalization?'}
            active={setIsClicked}
            action={() => navigation.goBack()}
          />
        </View>
      )}
    </View>
  );
};

export default HospitalizationDetails;

const styles = StyleSheet.create({
  boxStyle: {
    width: '100%',
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  deletbuttonclick: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
