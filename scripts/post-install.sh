#!/bin/bash
# Perform required fixes for NPM package incompatibilities
# Last updated 6th June 2016.

# If react-native-mock doesn't flat install, there is a naming collision.
# Removing the inner node_modules will fix the error.
# https://github.com/lelandrichardson/react-native-mock/issues/58
if [ -d "./node_modules/react-native-mock/node_modules" ]; then
  rm -rf "./node_modules/react-native-mock/node_modules"
  echo "Deleted inner node_modules in react-native-mock"
else
  echo "Flat install was successful; no cleanup necessary"
fi
