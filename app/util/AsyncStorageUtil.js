import {AsyncStorage} from 'react-native';

var AsyncStorageUtil = {
  setValue: function(key, value, callBack) {
    if (value) {
      return AsyncStorage.setItem(key, value, error => callBack(error));
    }
  },
  setValues: function(multiParis, callBack) {
    if (multiParis) {
      return AsyncStorage.multiSet(multiParis, errors => callBack(errors));
    }
  },
  getValue: function(key, callBack) {
    return AsyncStorage.getItem(key, (error, result) =>
      callBack(error, result),
    );
  },
  removeValue: function(key, callBack) {
    return AsyncStorage.removeItem(key, error => callBack(error));
  },
};

export default AsyncStorageUtil;
