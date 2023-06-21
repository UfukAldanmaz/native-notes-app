module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};

// module.exports = {
//   presets: [
//     ['babel-preset-expo'],
//     ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
//   ],
//   plugins: [
//     ['react-native-reanimated/plugin'],
//     [
//       '@babel/plugin-transform-react-jsx',
//       {
//         runtime: 'automatic',
//       },
//     ],
//   ],
// }

// module.exports = {
//   presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]],
//   plugins: [
//     [
//       '@babel/plugin-transform-react-jsx',
//       {
//         runtime: 'automatic',
//       },
//     ],
//   ]
// }