# React Native Redux Boiler

This is a boilerplate project for a React Native application that uses Redux to manage state. Note that I use [React Native Debugger](https://github.com/jhen0409/react-native-debugger) for debugging, which I highly recommend as a way to visualize the redux logic in your application. I do my best to keep this updated with the latest version of React Native. 

```bash
git clone https://github.com/breezykermo/react-native-redux-boiler my-project
cd my-project
sudo rm -r .git   #remove git history
git init
git remote add origin https://github.com/{your-username}/{your-repo-name}

brew update && brew cask install react-native-debugger
npm i -g yarn
npm i -g react-native-debugger-open
yarn   #install dependencies: can also use 'npm install'

#run the app on iOS simulator
npm run debug:ios
```