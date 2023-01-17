import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView} from 'react-native';
import TempAuth from '~templates/Auth';

const Sign = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
   <SafeAreaView className="flex-1 items-center justify-center bg-white">
    <TempAuth/>
   </SafeAreaView>
  );
}

export default Sign;
