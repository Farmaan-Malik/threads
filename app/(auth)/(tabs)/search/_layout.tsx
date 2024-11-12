import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: '#fff' }, headerShadowVisible: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name='profile/[id]' options={{headerShown:false}}/>
    </Stack>
  );
};
export default Layout;
