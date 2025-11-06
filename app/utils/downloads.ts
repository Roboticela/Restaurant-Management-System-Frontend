// Download configuration with dynamic version and checksum support

export const APP_VERSION = '1.0.0';
export const GITHUB_REPO = 'Roboticela/Restaurant-Management-System';
export const GITHUB_BASE_URL = `https://github.com/${GITHUB_REPO}/releases/download/v${APP_VERSION}`;
export const GITHUB_LATEST_URL = `https://github.com/${GITHUB_REPO}/releases/latest/download`;

export interface DownloadFileConfig {
  format: string;
  arch?: string;
  label?: string;
  formatPrefix?: string;
  platformSuffix?: string;
  checksum?: {
    sha256?: string;
    sha512?: string;
  };
}

export interface PlatformConfig {
  platform: string;
  files: DownloadFileConfig[];
}

// Checksums mapping - can be fetched dynamically or updated manually
export const CHECKSUMS: Record<string, { sha256?: string; sha512?: string }> = {
  // Windows
  'restaurant-management-system-windows-x64-1.0.0.exe': {
    sha256: '87ba0979b04cc0083604e04be77f1af119a61fea7e755ee36f9d33d7840e1d14'
  },
  'restaurant-management-system-windows-x64-1.0.0.exe.sha256': {
    sha256: '8954e083e661a2869847ddecd3874c09af49ee328b10fa1fd0ed0b1df35111d0'
  },
  'restaurant-management-system-windows-x64-1.0.0.exe.sha512': {
    sha256: 'e99a756fda6f1e45f7d9bd8622e19c63901539a9fec63caf7893f979018a04ea'
  },
  'restaurant-management-system-windows-x64-msi-1.0.0.msi': {
    sha256: '0e5a473c760ad5f27d455fd236c458751574ac60f36ae65527374596a3365c96'
  },
  'restaurant-management-system-windows-x64-msi-1.0.0.msi.sha256': {
    sha256: '7b808f5637b43a177ba196c121e922da45b7cb25d88042b9260c0cdd06439f6b'
  },
  'restaurant-management-system-windows-x64-msi-1.0.0.msi.sha512': {
    sha256: 'b9672074b04cd793c56d5df0c662b5ac2eccf91c64e6b699dffb5dd3908d3664'
  },
  'restaurant-management-system-windows-aarch64-1.0.0.exe': {
    sha256: 'c7968419512e8f5542ab5a07961651ecccfc18fe3097b862320b3b7ddddb6823'
  },
  'restaurant-management-system-windows-i686-1.0.0.exe': {
    sha256: '21694ecb3129ea193fc01b0021abb41afc935d13c27488fbedbb3745382fe2e7'
  },
  // Linux
  'restaurant-management-system-linux-x64-appimage-1.0.0.AppImage': {
    sha256: 'a27ecaf3d8c43580761a4b7ec749d7babe5389a63f8daa439813ea12ef658b9e'
  },
  'restaurant-management-system-linux-x64-deb-1.0.0.deb': {
    sha256: 'ed0b61093851c696f92f3252fa7f106415a54de71d5e387e5a26b25ada5d144c'
  },
  'restaurant-management-system-linux-x64-rpm-1.0.0.rpm': {
    sha256: 'be8a61303c2414cb4940577048bef0a322c7367f31a1d703e63c9c64db1cd223'
  },
  // macOS
  'restaurant-management-system-macos-arm64-1.0.0.dmg': {
    sha256: 'daf9729fb21f95757780629fe34f195658cb98b58ed29f41fb06959250132912'
  },
  'restaurant-management-system-macos-x64-1.0.0.dmg': {
    sha256: 'bc990de827d02fb6f42e0fd57357965463b34faef516cb63f26b8100ed4c572f'
  },
  'restaurant-management-system-macos-universal-1.0.0.dmg': {
    sha256: '02b469d6d579b30d7bb9b8451357df7dfe971c9677c283e52cd2e3556b0e9eaa'
  },
  'restaurant-management-system-macos-arm64-app-1.0.0.gz': {
    sha256: '1ccaf428b5551118ca6d82c88ec5d5654f8ba87ff7ef35f9ffee7c6debcc93ab'
  },
  'restaurant-management-system-macos-x64-app-1.0.0.gz': {
    sha256: 'e76ee4b96ce04026cc88f93cb885a44ba0357fa5003ff0ff2d838ed97e67fc33'
  },
  // Android
  'restaurant-management-system-android-aarch64-1.0.0.apk': {
    sha256: 'd353b4869d9290de32d2de4a8ea6aa8dc83e240f66040f6aef103bf9be95d8f2'
  },
  'restaurant-management-system-android-armv7-1.0.0.apk': {
    sha256: 'd505ed90c388d7197503657cc359005ad942e0eea6e67e432cd7f5e94fe9793b'
  },
  'restaurant-management-system-android-i686-1.0.0.apk': {
    sha256: '11bb46bdce7d9ad8cb33a656574abfcf9d89106035df519d4a63e752f80ccc89'
  },
  'restaurant-management-system-android-x86_64-1.0.0.apk': {
    sha256: 'c31c83224b22bbd09368bdaf18f8a8ca41824b92589613b9cf62bc04a27d4b30'
  },
  // iOS Simulator
  'restaurant-management-system-ios-simulator-aarch64-1.0.0.zip': {
    sha256: '55770bb8b17f4f70d3f79f126071f20cdf1bbe594e1d960b7125b3205323e391'
  },
  'restaurant-management-system-ios-simulator-x86_64-1.0.0.zip': {
    sha256: '695b41ae48f0ddc89f42782192bc1d7577a1e333cdbe8c43b6f52861fd062101'
  }
};

/**
 * Generate download URL for a file
 * Handles special naming conventions for different platforms
 */
export function getDownloadUrl(
  platform: string,
  arch: string,
  format: string,
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  // Handle platform-specific suffixes (e.g., "ios-simulator")
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  // Add architecture
  fileName += `-${arch}`;
  
  // Handle format prefixes (e.g., "msi", "appimage", "deb", "rpm", "app")
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  // Add version and format
  fileName += `-${version}.${format}`;
  
  return `${GITHUB_BASE_URL}/${fileName}`;
}

/**
 * Get checksum URL for a file
 */
export function getChecksumUrl(
  platform: string,
  arch: string,
  format: string,
  checksumType: 'sha256' | 'sha512',
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}.${checksumType}`;
  
  return `${GITHUB_BASE_URL}/${fileName}`;
}

/**
 * Get checksum file name
 */
export function getChecksumFileName(
  platform: string,
  arch: string,
  format: string,
  checksumType: 'sha256' | 'sha512',
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}.${checksumType}`;
  
  return fileName;
}

/**
 * Get full file name
 */
export function getFileName(
  platform: string,
  arch: string,
  format: string,
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}`;
  
  return fileName;
}

/**
 * Get checksum from local mapping
 */
export function getChecksum(fileName: string, type: 'sha256' | 'sha512'): string | undefined {
  return CHECKSUMS[fileName]?.[type];
}

