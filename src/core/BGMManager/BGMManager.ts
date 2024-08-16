import {NativeModules} from 'react-native';
import {BGMErrorCode, BGMManagerType} from './Type';

const {BgmManager} = NativeModules;
// as {
//   BgmManager: BGMManagerType;
// };

export async function fetchHistory(
  deviceSn: string,
  eventIndex: number,
): Promise<string | null> {
  try {
    // setTimeout(() => {
    //   BgmManager.init();
    // }, 3000);
    const result = await BgmManager.getHistory(deviceSn, eventIndex);
    console.log(JSON.parse(result));
    return result;
  } catch (err: any) {
    // if (err.code) {
    //   switch (err.code) {
    //     case BGMErrorCode.ERROR_DEVICE_MISS:
    //       throw new Error('Device not found!');
    //     case BGMErrorCode.ERROR_CONNECT_ERROR:
    //       throw new Error('Connection failed!');
    //     case BGMErrorCode.ERROR_MESSAGE_TIMEOUT:
    //       throw new Error('Communication timeout!');
    //     case BGMErrorCode.ERROR_BLUETOOTH_CLOSE:
    //       throw new Error('Bluetooth turned off!');
    //     case BGMErrorCode.ERROR_BLE_NO_PERMISSION:
    //       throw new Error('Bluetooth permission not opened!');
    //     case BGMErrorCode.ERROR_CALIBRATION_TIME:
    //       throw new Error('Location services turned off!');
    //     case BGMErrorCode.ERROR_HISTORY_EMPTY:
    //       throw new Error('No data!');
    //     default:
    //       throw new Error('Something went wrong!');
    //   }
    // } else {
    //   throw new Error('Something went wrong!');
    // }
    console.log(err);
  }
}
