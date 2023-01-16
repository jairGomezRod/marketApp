# Market App

## How to start from this template?

You can follow [this guide](https://reactnative.dev/docs/environment-setup) to setup your environment.

## How run this App

```bash
$ npx expo start
```

without cache
```bash
$ npx expo start -c
```

## What's included
Here's a list of what this template provides.

### Template
- A React Native app with the basic stuff included in [react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript)


### Libraries
- [Expo](https://expo.dev/)
- The [react-navigation](https://github.com/react-navigation/react-navigation) library with Stack and Tabs example
- [Nativewind](https://www.nativewind.dev/guides/babel)
- A basic API client powered by [Axios](https://github.com/axios/axios)
- A basic [ESLint](https://github.com/eslint/eslint) configuration
- A library for managing secrets and a sample in `.env.sample` ([react-native-config](https://github.com/luggit/react-native-config))
- A library for managing the splash screen and a default splash screen ([react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen))
- A library for managing forms, and an example ([react-hook-form](https://github.com/react-hook-form/react-hook-form))
- A library for validating API response, and an example ([yup](https://github.com/jquense/yup))
- A service for managing stored data with a library that encrypt sensitive data ([react-native-sensitive-info](https://github.com/mCodex/react-native-sensitive-info))

### Extra
- Some basic components (`Input` and `RoundButton`)
- Some assets to show how it works

## For you to do
For personalizing this template, here's a list of things you should do.

- [ ] Copy `.env.sample` to `.env` (btw, `BASE_URL` doesn't need to be in the `.env`, it's only for the example)
- [ ] Update the splash screens on both platforms (`android/app/src/main/res/layout/launch_screen.xml` for Android and `ios/<APP_NAME>/LaunchScreen.storyboard` for iOS)
- [ ] Change the app icons on both platforms
- [ ] Maybe rename the app id from `com.<APP_NAME>` to whatever you like
  - `android/app/_BUCK`
  - `android/app/build.gradle`
  - `android/app/build/generated/source/buildConfig/debug/com/<APP_NAME>/BuildConfig.java`
  - `android/app/src/debug/java/com/<APP_NAME>/ReactNativeFlipper.java`
  - `android/app/src/main/AndroidManifest.xml`
  - `android/app/src/main/java/com/<APP_NAME>/MainActivity.java`
  - `android/app/src/main/java/APP_NAME>/MainApplication.java`
  - The file structure in `android/app/src/main/java` to reflect you app id. e.g. `com.tb.app` -> `android/app/src/main/java/com/tb/app/...`
- [ ] Change the app itself!

## Mentions
- [Logo Freepik](https://www.freepik.es/vector-gratis/concepto-logotipo-supermercado_7114901.htm#page=2&query=supermarket&position=1&from_view=search&track=sph)

