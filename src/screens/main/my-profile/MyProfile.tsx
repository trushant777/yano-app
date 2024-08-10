/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/header/Header';
import { EditIcon } from '../../../assets/icon/IconNames';
import { Colors } from '../../../constants/Colors';
import { CardStyles } from '../../../components/cards/CardStyle';
import { DummyImage } from '../../../assets/dummy/images';
import FilledButton from '../../../components/buttons/FilledButton';
import Icons from '../../../assets/icon/Icon';
import BottomSheet from '../../../components/bottom-sheet/BottomSheet';
import ShareButton from '../profile/ShareProfileButton';
import { StaticImage } from '../../../assets/images';
import { staticIcons } from '../../../assets/image';

const menuData = [
  {
    id: '1',
    icon: (
      // <Icons.MaterialCommunityIcons
      //   name="toolbox"
      //   size={25}
      //   color={Colors.LightGreen}
      // />
      <Image
        source={staticIcons.MeasurementTool}
        style={{ height: 20, width: 20 }}
      />
    ),
    text: 'Measurement Tool',
    path: 'MeasurementTools',
  },
  {
    id: '2',
    icon: <Icons.FontAwesome name="gear" size={25} color={Colors.LightGreen} />,
    text: 'Settings',
    path: 'Settings',
  },
  {
    id: '3',
    icon: (
      <Icons.MaterialCommunityIcons
        name="comment-question"
        size={25}
        color={Colors.LightGreen}
      />
      // <Image
      //   source={staticIcons.Help}
      //   style={{ height: 20, width: 20 }}
      // />
    ),
    text: "Yano's support",
    path: 'YanoSupport',
  },
];

const MyProfile = ({ navigation }: any) => {
  let [showQR, setShowQR] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomSheet isVisible={showQR} onBackdropPress={() => setShowQR(false)}>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Image source={DummyImage.QR} height={150} width={150} />
          <Text style={{ marginVertical: 20 }}>
            Scan this QR code with your patient's cell phone to access their
            measurements and health history.
          </Text>
          <FilledButton
            type="blue"
            label="Done"
            onPress={() => setShowQR(false)}
          />
        </View>
      </BottomSheet>
      <Header
        title="My profile"
        showBackIcon={false}
        headerRightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Image source={staticIcons.EditPencil} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1, backgroundColor: Colors.GhostWhite }}>
        <View style={[CardStyles.container, { marginTop: 10 }]}>
          <View
            style={{ paddingVertical: 24, width: '100%', alignItems: 'center' }}>
            <Image
              source={DummyImage.DoctorImg}
              height={80}
              width={80}
              style={{ borderRadius: 40 }}
            />
            <Text style={{ color: Colors.Blue, fontSize: 18, fontWeight: '600' }}>
              Dr. Eduardo Escobar
            </Text>
            <Text style={{ color: Colors.SteelBlue }}>General medicine</Text>
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: Colors.LightGray,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 14,
            }}>
            <ShareButton
              label="Share Profile"
              type="blue"
              style={{ width: '75%' }}
              icon={
                <Icons.EvilIcons
                  name="share-google"
                  size={30}
                  color={Colors.White}
                />
              }
            />
            <FilledButton
              type="lightGrey"
              label=""
              style={{ width: '18%', marginLeft: 8 }}
              icon={
                // <Icons.AntDesign name="qrcode" color={Colors.Blue} size={25} />
                <Image source={StaticImage.QrCode} style={{
                  width: 20, height: 20
                }} />
              }
              onPress={() => setShowQR(true)}
            />
          </View>
        </View>

        <View style={CardStyles.container}>
          <FlatList
            data={menuData}
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
            renderItem={({ item, index: _i }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.path)}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 14,
                  alignItems: 'center',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {item.icon}
                  <Text
                    style={{
                      color: Colors.Blue,
                      fontSize: 16,
                      fontWeight: '600',
                      marginLeft: 6,
                    }}>
                    {item.text}
                  </Text>
                </View>
                <Icons.MaterialIcons
                  name="navigate-next"
                  size={30}
                  color={Colors.Blue}
                />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.LightGray,
    height: 1,
    width: '100%',
  },
});
