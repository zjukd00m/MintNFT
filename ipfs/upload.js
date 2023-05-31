const attributeList = [
  ['Resistence', '70'],
  ['Armor', '0'],
  ['Fire Damage', '60'],
  ['Immunity', 'Fire'],
  ['Immunity', 'Human Weapon'],
];

async function run() {
  const { create } = await import('ipfs-http-client');
  const ipfs = create();

  const attributes = attributeList.map((attribute) => ({
    trait_type: attribute[0],
    value: attribute[1],
  }));

  const metadata = {
    path: '/',
    content: JSON.stringify({
      name: 'Drac000',
      attributes,
      image: 'https://ipfs.io/ipfs/QmPnnVRxNRcAhfLBQ5bVepB3Wmj3ovG97iuy8MTV9KHBdT',
      description: 'A rare drag0n f0und at the abyss',
    }),
  };

  console.log(metadata);

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
