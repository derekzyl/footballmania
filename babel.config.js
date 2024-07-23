module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    // [
    //   'module:@react-native/babel-preset',
    //   {useTransformReactJSXExperimental: true},
    // ],
  ],

  plugins: [

     'react-native-reanimated/plugin',
    // [
    //   'module-resolver',
    //   {
    //     root: ['.'],
    //     alias: {
    //       '@src/*': './src/*',
    //       '@components/*': './src/components/*',
    //       '@screens/*': './src/screens/*',
    //       '@assets/*': './src/assets/*',
    //       '@theme/*': './src/theme/*',
    //       '@hooks/*': './src/hooks/*',
    //       '@lib/*': './src/lib/*',
    //     },
    //   },
    // ],
  ],
};
