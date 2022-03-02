
const basePath = process.cwd();
const fs = require("fs");

const buildDir = `${basePath}/metadata`;

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);
  fs.mkdirSync(`${buildDir}/json`);
};

const startCreating = async () => {
  const namePrefix = "Dinos";
  const description = "Dinos Collection #8000";
  const baseUri =
    "https://gateway.pinata.cloud/ipfs/QmYtV8CHKzDLDnQRWtSEuByWXmCJQHnjiY2HHNR9eBgwkZ/placeholder.png";

  for (let i = 0; i < 8000; i++) {
    let tempMetadata = {
      name: `${namePrefix} #${i}`,
      description: description,
      image: baseUri,
      // image: `${baseUri}/${shortName}.png`,
      // attributes: tempAttributes,
    };
    fs.writeFileSync(
      `${buildDir}/json/${i}`,
      JSON.stringify(tempMetadata, null, 2)
    );
  }
};

buildSetup();
startCreating();
