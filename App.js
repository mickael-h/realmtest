import React, { useEffect, useState } from 'react';
import Realm from 'realm';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Color from './src/models/Color';

const App = () => {
  const [realm, setRealm] = useState(null);

  useEffect(() => {
    openRealm();
    return closeRealm;
  }, []);

  const openRealm = () => {
    Realm.open({
      schema: [Color],
    }).then(db => {
      db.write(() => createDb(db));
      setRealm(db);
    });
  };

  const closeRealm = () => {
    if (realm != null && !realm.isClosed) {
      realm.close();
    }
  };

  const createDb = db =>
    db.create(Color,
      {
        name: 'grey',
        r: 200,
        b: 200,
        g: 200,
        a: 255,
      },
      Realm.UpdateMode.Modified);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

      </SafeAreaView>
    </>
  );
};
export default App;
