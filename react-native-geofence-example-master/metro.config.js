
const {getDefaultConfig} = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();


module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  exports.resolver = {
    ...defaultResolver,
    sourceExts: [
      ...defaultResolver.sourceExts,
      "cjs",
    ],
  };

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    
  };

  
})();