import { StatusBar, SafeAreaView } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/screens/Cesta';
import mock from './src/mocks/cesta';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if (!loadedFont) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
