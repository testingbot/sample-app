# TestingBot Sample App
This repository contains the source code of a mobile Sample App, in React Native.
It is a very basic calculator, taking the sum of two inputs.

This demo app is mainly used for example purposes, as seen on the [Appium Examples](https://testingbot.com/support/getting-started/appium.html)

## Build

To build an iOS simulator build, please use:

```
xcodebuild -sdk iphonesimulator -configuration Release -workspace SampleApp.xcworkspace -scheme SampleApp
```

To build an Android release:
```
./gradlew assembleRelease
```

If you want to build an IPA file, first create an archive:
```
xcodebuild -exportArchive -archivePath sampleapp.xcarchive -exportPath build -exportOptionsPlist export-options.plist
```