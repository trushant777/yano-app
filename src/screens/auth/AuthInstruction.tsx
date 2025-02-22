import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Colors} from '../../constants/Colors';
import Header from '../../components/header/Header';
import {DummyImage} from '../../assets/dummy/images';
import FilledButton from '../../components/buttons/FilledButton';
import {navigate} from '../../navigation/RootNavigation';
import UserContext from '../../contexts/UserContext';
import {StaticImage} from '../../assets/images';
import {AuthScreen} from '../../navigation/auth/AuthScreens';

const AuthInstruction = ({navigation}: any) => {
  const {login, isPatient} = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      navigate(AuthScreen.DeviceConnected);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.GhostWhite,
        position: 'relative',
      }}>
      <Header
        title=""
        headerRightComponent={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                login();
                navigate('tabs');
              }}>
              <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView style={{paddingVertical: 12, width: '94%', margin: 'auto'}}>
        <View>
          <View
            style={{
              backgroundColor: Colors.White,
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: Colors.Blue,
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Turn on the device
            </Text>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 4,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.SteelBlue,
                  textAlign: 'center',
                  paddingHorizontal: 12,
                }}>
                Please turn on the Yano Multi- Parameter device by holding down
                the power button until the blue light flashes.
              </Text>
            </View>
            <Image
              source={StaticImage.DeviceStart}
              style={{
                alignSelf: 'center',
                marginTop: 20,
                // width: 250,
                height: 300,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthInstruction;

const styles = StyleSheet.create({
  addBtn: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 10 : 0,
    left: 0,
    width: '100%',
    backgroundColor: Colors.White,
    padding: 10,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    fontSize: 14,
    color: '#00263E',
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 15,
    marginRight: 15,
  },
});
