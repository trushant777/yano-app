import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/Colors';
import {RadioButton} from 'react-native-paper';

interface GenderProps {
  selectedRole: string;
  setSelectedRole: (role: string) => void;
}

const Gender: React.FC<GenderProps> = ({selectedRole, setSelectedRole}) => {
  const Config = [
    {
      id: '1',
      label: 'Male',
    },
    {
      id: '2',
      label: 'Female',
    },
  ];

  const handlePress = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Gender</Text>
      <View style={styles.buttonContainer}>
        {Config.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.6}
            style={[
              styles.selectionCardContainer,
              {
                borderColor:
                  item.id === selectedRole
                    ? Colors.LightGreen
                    : Colors.LightGray,
                borderWidth: 2,
              },
            ]}
            onPress={() => handlePress(item.id)}>
            <RadioButton
              value={item.id}
              status={selectedRole === item.id ? 'checked' : 'unchecked'}
              onPress={() => handlePress(item.id)}
              color={Colors.LightGreen}
              uncheckedColor={Colors.Grey}
            />
            <Text
              style={[
                styles.selectionCardContainerText,
                {color: item.id === selectedRole ? Colors.Blue : Colors.Grey},
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 12,
  },
  headerText: {
    color: Colors.Blue,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectionCardContainer: {
    width: '48%',
    paddingVertical: 12,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.White,
  },
  selectionCardContainerText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
