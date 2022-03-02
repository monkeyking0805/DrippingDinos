import React, { useState } from 'react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopRoadmap from './DesktopRoadmap';
import IPadRoadmap from './IPadRoadmap';
import IPhoneRoadmap from './IPhoneRoadmap';

// ----------------------------------------------------------------------------------

const data = [
  {
    id: 1,
    title: 'designing',
    image: 'dino_2.png',
    content: 'We have started our designing process by creating unique traits for our four different base models. Our aim was to go beyond every expectation with every little detail, which in the end created this hyper detailed look. We are working hard to create the most exceptional looking NFT’s with solid utilities within a unique ecosystem on the Ethereum Network.'
  },
  {
    id: 2,
    title: 'minting',
    image: 'dino_3.png',
    content: 'There will be a whitelisted private sale with 2000 spots followed by a bigger public presale with 6000 spots. You will be able to mint from our own website, all details surrounding the minting will be shared on our website and Discord. Make sure you only use the links we send and promote on our socials. The security of our holders is our top priority, we highly recommend that you report any scams to our mod team.'
  },
  {
    id: 3,
    title: 'dao',
    image: 'dino_5.png',
    content: 'We are developing our own DAO, which will help us create an ecosystem where people can stake their DrippingDino NFT and our own token $DRIP. The token will be airdropped to all holders a few weeks after launch. All staked DrippingDinos NFT’s will earn a daily x amount of $DRIP. All information surrounding the tokenomics of the token will be shared shortly before the airdrop. The profits from this ecosystem will be split up into multiple branches of the project, which will include future giveaways, charity funds, development and more.'
  },
  {
    id: 4,
    title: 'charity',
    image: 'dino_6.png',
    content: 'Our aim with our charity is to provide a helping hand to people in need without compromising the needs of our holders. We want to give back in a sustainable way and make an impact in the world, while using this incredible technology. We will donate 100.000 USD worth of clothing to our own charity in the first week of minting, and we will continue this trend for every quarter each year. All future funds for our charity will be set up by our own DAO.'
  },
  {
    id: 5,
    title: 'fashion',
    image: 'dino_7.png',
    content: 'We want to stay true to our name Dripping Dino’s, so our aim is to bring that theme into the metaverse. We want you guys to have the best drip out so that means all traits and designs from your NFT will carry over to 3D digital models. We are looking into purchasing a plot on Sandbox and Decentraland where the community can come together and show off their drip! At last we have partnered up with amazing designer brands, which will also help us with designing clothes for the giveaways.'
  },
];

// --------------------------------------------------------------------------------

export default function Roadmap() {
  const [selectedPosition, setSelectedPosition] = useState(0);

  return (
    <>
      <MHidden width="mdDown">
        <DesktopRoadmap
          data={data}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
      </MHidden>
      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadRoadmap
            data={data}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneRoadmap
            data={data}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
        </MHidden>
      </MHidden>
    </>

  );
}