/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import {navigate} from '../../navigation/RootNavigation';
import {Colors} from '../../constants/Colors';
import {AuthScreen} from '../../navigation/auth/AuthScreens';
import {FormProvider, useForm} from 'react-hook-form';
import FormInput from '../../components/hook-form/FormInput';
import {FormInputType} from '../../components/hook-form/types';
import FormDateInput from '../../components/hook-form/FormDateInput';
import FormSelectionInput from '../../components/hook-form/FormSelectionInput';
import FilledButton from '../../components/buttons/FilledButton';
import FormPhoneNumberInput from '../../components/hook-form/FormPhoneNumberInput';

const Gender = [
  {
    id: 'Male',
    label: 'Male',
    enabled: true,
  },
  {
    id: 'Female',
    label: 'Female',
    enabled: true,
  },
];

const DoctorSpecialties = [
  {
    id: 'Cardiologist',
    label: 'Cardiologist',
    enabled: true,
  },
  {
    id: 'Dermatologist',
    label: 'Dermatologist',
    enabled: true,
  },
  {
    id: 'Neurologist',
    label: 'Neurologist',
    enabled: true,
  },
  {
    id: 'Pediatrician',
    label: 'Pediatrician',
    enabled: true,
  },
  {
    id: 'GeneralSurgeon',
    label: 'General Surgeon',
    enabled: true,
  },
  {
    id: 'OrthopedicSurgeon',
    label: 'Orthopedic Surgeon',
    enabled: true,
  },
  {
    id: 'Gynecologist',
    label: 'Gynecologist',
    enabled: true,
  },
  {
    id: 'Ophthalmologist',
    label: 'Ophthalmologist',
    enabled: true,
  },
  {
    id: 'Psychiatrist',
    label: 'Psychiatrist',
    enabled: true,
  },
  {
    id: 'Radiologist',
    label: 'Radiologist',
    enabled: true,
  },
  {
    id: 'Urologist',
    label: 'Urologist',
    enabled: true,
  },
  {
    id: 'Endocrinologist',
    label: 'Endocrinologist',
    enabled: true,
  },
];

const Registration = () => {
  const {...methods} = useForm({mode: 'onBlur'});
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          title=""
          headerRightComponent={
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text}>Already Registered?</Text>
              <TouchableOpacity onPress={() => navigate(AuthScreen.Login)}>
                <Text style={styles.loginButton}>Log in</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View style={styles.body}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <FormProvider {...methods}>
              <FormInput name="Name" label="Name" />
              <FormInput name="lastName" label="Last Name" />
              <FormInput
                name="email"
                label="Email"
                type={FormInputType.Email}
                autoCapitalize="none"
              />
              <FormPhoneNumberInput name="phone" />
              <FormSelectionInput
                name="gender"
                placeholder="Select your gender"
                options={Gender}
                label="Gender"
                optionsListLabel="Select your gender"
                optionsListHeight={400}
              />
              <FormDateInput name="dob" label="Date of birth" />
              <FormSelectionInput
                name="specialty"
                placeholder="Select your specialty"
                label="Specialty"
                options={DoctorSpecialties}
                optionsListLabel="Select your specialty"
                optionsListHeight={400}
              />
              <FormInput
                name="password"
                label="Password"
                type={FormInputType.Password}
              />
              <FormInput
                name="repeatPassword"
                label="Repeat Password"
                type={FormInputType.Password}
              />
            </FormProvider>
          </ScrollView>
        </View>
        <FilledButton
          label="Continue"
          type="blue"
          style={{width: '90%', alignSelf: 'center'}}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.Blue,
    marginRight: 8,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: 8,
    color: Colors.Blue,
    fontWeight: 'bold',
    padding: 10,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.GhostWhite,
    paddingHorizontal: 14,
  },
});
