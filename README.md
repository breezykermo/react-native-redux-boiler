# OnsiteHire

## Testing

Testing is set up to stub node imports with those folders that exist in *scripts/test/mocks/node_modules*.
It is also possible to stub files or folders in src, or anywhere else in the project, by adding them to
the *scripts/test/mocks* folder.

NB: react 15.0.2 and react-native are necessary in devDependencies (or, at least, seem to be)
in order to have react-native-mock run appropriately with mocha. I should regularly try to
update this.
