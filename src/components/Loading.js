import { ActivityIndicator, View } from 'react-native';

export default function Loading() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
