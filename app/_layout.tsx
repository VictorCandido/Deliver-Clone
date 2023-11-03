import { Stack } from 'expo-router';
import CustomHeader from '../Components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            header: () => <CustomHeader />
          }} 
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
