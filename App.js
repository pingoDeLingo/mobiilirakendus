import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const IOS_CLIENT_ID = "889267781491-ui4bsatr64dgibavabdfjkql9ositd0c.apps.googleusercontent.com";
const WEB_CLIENT_ID = "889267781491-q61okfnjmecstlrgha4rs072iro0c6nv.apps.googleusercontent.com";
const REVERSED_CLIENT_ID = "com.googleusercontent.apps.889267781491-ui4bsatr64dgibavabdfjkql9ositd0c";

const App = () => {
  useEffect(() => {
      GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          webClientId: WEB_CLIENT_ID,
          offlineAccess: true,
          iosClientId: IOS_CLIENT_ID,
      })
  }, [])
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
}

export default App;