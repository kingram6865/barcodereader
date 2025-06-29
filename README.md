# Barcodereader 

This app scans a barcode and stores the scanned data in a database.
As well, the user can input some data about the item being scanned. This option
will be less useful when the best 3rd party API for the translating the UPC code to
accurate data has been determined.

The idea for this app derives from a personal need to track grocery purchases for budgeting.


## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## App Specific Notes

### Configuration

Create a '.env' file with the following contents

The template is to prefix any environment variable and set its value in this mnner EXPO_PUBLIC_[NAME]=VALUE

This is the back end api
EXPO_PUBLIC_BACKEND_BASE_URI=http://backend.api.server:3030

These variables are for a UPC lookup being used as a resource
EXPO_PUBLIC_UPC_LOOKUP_BASE_URI=