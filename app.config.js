// Release builds ship without the dev-client's local-network keys. expo-dev-client
// stays installed for development builds, but its config plugin writes
// NSLocalNetworkUsageDescription and the _expo._tcp Bonjour service into every
// Info.plist, which App Review flags as unused in the store build.
const { withInfoPlist } = require('expo/config-plugins');

const isStoreBuild = () =>
  process.env.EAS_BUILD_PROFILE === 'production' || process.env.PP_STORE_BUILD === '1';

const withoutUnusedStoreKeys = (config) =>
  withInfoPlist(config, (mod) => {
    delete mod.modResults.NSLocalNetworkUsageDescription;
    const services = (mod.modResults.NSBonjourServices ?? []).filter((s) => s !== '_expo._tcp');
    if (services.length > 0) mod.modResults.NSBonjourServices = services;
    else delete mod.modResults.NSBonjourServices;

    const modes = (mod.modResults.UIBackgroundModes ?? []).filter((mode) => mode !== 'audio');
    if (modes.length > 0) mod.modResults.UIBackgroundModes = modes;
    else delete mod.modResults.UIBackgroundModes;

    // Keep NSPhotoLibraryAddUsageDescription (save-to-photos). Drop unused
    // read/camera/mic/Face ID strings so review does not ask why they are there.
    delete mod.modResults.NSMicrophoneUsageDescription;
    delete mod.modResults.NSFaceIDUsageDescription;
    delete mod.modResults.NSCameraUsageDescription;
    delete mod.modResults.NSPhotoLibraryUsageDescription;

    return mod;
  });

module.exports = ({ config }) => {
  if (!isStoreBuild()) return config;
  return withoutUnusedStoreKeys(config);
};
