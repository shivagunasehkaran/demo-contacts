# Contact Manager

This app helps user to manage their contacts like Add and edit existing contacts. It's basically sync contacts from the user device.

Please go ahead and play around  :)


## Covered :
  
  - Sync user device contacts based on user permission
  - It will ask user permission to allow and dont allow for contact syncing.
  - Show contact details in Item list	(name and first letter for name in avatar sectin with attractive color)
  - Have Add button to navigate to contact manage screen
  - When user press contact list item, will be able to redirect to show user's details such as email, name and edit button.
  - Flatlist used for all the list to show to the user contact
  - Manage contact screen (create contact) have text input to add user details such as name, email, phone number
  - Project working on both Android and iOS
  - Project running on latest RN 0.65.1
  - I have created app UI as per some best pratice approach.

## Not Covered :

  - I could not cover the bonus points due to current company work, Willing to implement in the future


## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **Enzyme** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. 
    (Tried to use all latest methods)
    
    
## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.1)
  - react-native (0.64.2)
  - react-native-gesture-handler (1.10.3)
  - react-native-safe-area-context (3.2.0)
  - react-native-screens (3.4.0)
  - react-native-contacts (7.0.2)
  - react-native-permissions (3.0.5)
  - jest (26.6.3) - devDependencies
  - enzyme (3.11.0) - devDependencies
  - enzyme-adapter-react-16 (1.15.6) - devDependencies
  - flow-bin (0.156.0) - devDependencies
  - eslint 7.14.0 - devDependencies
  - used Prettier for code formatting

## Thinking & Decisions :

  - Handled all the NULL checks in all components and showing console for API failure.
  - Created flatlist for displaying contact details.
  - Provided Loader (Activity indicator) before API calling. Loader will shown in upper middle of the screen, just for user interaction.
  - Created Navigator and Routes for maintaining stacks/screens
  - Created ColourPalette for maintaining colors
  - Created Utility function for maintaining all application static text's
  - Created Constant file for maintaining API url's

  
  ## Screenshots for the output

  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314475-4f6c0295-4591-4108-8cd6-2da9394c2e33.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314501-54cbf68c-9d87-4c5a-a99a-2b200aefc46f.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314509-534878ba-fba5-4039-a707-e0f0c2ac8f07.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314511-1acd9334-a7b5-4e5e-a406-00949ca18b9c.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314512-bbf3a897-5647-460f-9c85-6cf1a97145aa.png" width="300" height="650"</img> 
  </div>
  <div align="center">
    <img src="https://user-images.githubusercontent.com/11419839/131314513-382a66a9-1ea5-40ed-b273-ae2e59ecf2e3.png" width="300" height="650"</img> 
  </div>

