import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Unfortunately, that item was not found!' }} />
      <View>
          <Link href="/">Back to Home Screen</Link>
      </View>
    </>
  )
}
