import semver from 'semver';

const requiredVersion: string = '22.14.0'; // please update .nvmrc file too
const currentVersion: string = process.versions.node;

if (!semver.satisfies(currentVersion, requiredVersion)) {
  console.error(
    `Node.js version ${currentVersion} is outdated. Please update to the latest version.`,
  );
  process.exit(1);
}
