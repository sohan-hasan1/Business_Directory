import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SignIn } from "@clerk/clerk-expo/web";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "./../components/LoginScreen"

export default function RootLayout() {
  useFonts({
    'poppins':require('./../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium':require('./../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold':require('./../assets/fonts/Poppins-Bold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false
          }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  )
}
