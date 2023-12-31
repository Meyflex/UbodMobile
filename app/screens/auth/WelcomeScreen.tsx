import React from "react"
import { View, StyleSheet, Image, ViewStyle, TextStyle, ImageBackground } from "react-native"
import { Button, Text } from "../../components"
import { colors, spacing, typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"


const Logo = require("assets/images/imageWithoutText.png");
const background = require("assets/images/colorful-shades-abstract-background.webp");
const WelcomeScreen = () => {
  const navigation = useNavigation()
  const $baseViewStylebuttonOne: ViewStyle = {
    minHeight: 56,
    borderRadius: 10,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    overflow: "hidden",
    marginBottom: 10,
  }
  const $baseViewStylebuttonTwo: ViewStyle = {
    minHeight: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "transparent",
  }
  const $baseTextStyle: TextStyle = {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: typography.primary.semiBold,
    textAlign: "center",
    flexShrink: 1,
    flexGrow: 0,
    zIndex: 2,
  }
  const $baseTextStyletwo: TextStyle = {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: typography.primary.semiBold,
    textAlign: "center",
    flexShrink: 1,
    flexGrow: 0,
    zIndex: 2,
    color: "white",
  }

  function signIn(): void {
    navigation.navigate('SignInScreen' as never)
  }
  function signUp(): void {
    navigation.navigate('ObjectiveSupPageOne' as never)
  }
  return (
    <>
      <ImageBackground source={background} style={style.background}>
        <View style={style.logoTopLeft}>
          <Image source={Logo} style={style.logo} resizeMode="contain" />
        </View>
        <View style={style.background}>
          <Text style={style.text} size={"xl"} weight={"semiBold"}> UBOD </Text>
        </View>
        <View style={style.footer}>
          <Button style={$baseViewStylebuttonOne}
                  tx="WelcomePage.ButtonSignUp" txOptions={{ tx: "WelcomePage.ButtonSignUp" }}
                  onPress={signUp} textStyle={$baseTextStyle}
          />
          <Button tx="WelcomePage.ButtonSignIn" style={$baseViewStylebuttonTwo} textStyle={$baseTextStyletwo}
                  pressedStyle={$baseViewStylebuttonOne} txOptions={{ tx: "WelcomePage.ButtonSignUp" }}
                  onPress={signIn}
          />
        </View>
      </ImageBackground>
    </>
  )
}

const style = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 2,
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: "2.5%",
    width: "100%",
  },
  // eslint-disable-next-line react-native/no-color-literals
  logo: {
    backgroundColor: colors.transparent,
    margin: "5%",
    maxHeight: 50,
    maxWidth: 50,
    tintColor: colors.black,
  },
  logoTopLeft: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: "10%",
    width: "100%",
  },
  text: {
    color: colors.background,
  },
})

export { WelcomeScreen }



