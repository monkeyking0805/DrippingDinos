import React, { useState, useEffect } from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import { ethers } from "ethers";
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopHeroSection from './heroSections/DesktopHeroSection';
import IPadHeroSection from './heroSections/IPadHeroSection';
import DesktopFlowBar from './flowBars/DesktopFlowBar';
import IPadFlowBar from './flowBars/IPadFlowBar';
import IPhoneHeroSection from './heroSections/IPhoneHeroSection';
import IPhoneFlowBar from './flowBars/IPhoneFlowBar';
import DesktopAndIPadIntroSection from './introSections/DesktopAndIPadIntroSection';
import IPhoneIntroSection from './introSections/IPhoneIntroSection';
import useWallet from '../../hooks/useWallet';
import { ABI, CONTRACT_ADDRESS, NFT_PRICE } from '../../constants';

export default function HomePage() {
  const { mintAmount } = useWallet();

  const [isOpened, setIsOpened] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const [currentAccount, setCurrentAccount] = useState(null);

  const openAlert = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setIsOpened(true);
  };

  const connectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      openAlert('warning', 'Please install metamask.');
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      openAlert('error', 'Sorry something was wrong.');
    }
  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      return openAlert('warning', 'Make sure you have Metamask installed.');
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      return openAlert('warning', 'No authorized account found.');
    }
  };

  const mint = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        let transaction = await contract.mint(mintAmount, { value: ethers.utils.parseEther(String(NFT_PRICE * mintAmount)) });
        await transaction.wait();

        openAlert('success', 'Minted!');
      } else {
        openAlert('error', 'Ethereum object doesn\'t exist');
      }
    } catch (error) {
      openAlert('error', 'Transaction is failed.');
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);
  return (
    <Box>
      <MHidden width="mdDown">
        <DesktopHeroSection currentAccount={currentAccount} mint={mint} connectWallet={connectWallet} />
        <DesktopFlowBar />
      </MHidden>

      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadHeroSection currentAccount={currentAccount} mint={mint} connectWallet={connectWallet} />
          <IPadFlowBar />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneHeroSection currentAccount={currentAccount} mint={mint} connectWallet={connectWallet} />
          <IPhoneFlowBar />
        </MHidden>
      </MHidden>

      <MHidden width="mdDown">
        <DesktopAndIPadIntroSection />
      </MHidden>

      <MHidden width="mdUp">
        <MHidden width="smDown">
          <DesktopAndIPadIntroSection />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneIntroSection />
        </MHidden>
      </MHidden>

      <MHidden width="mdDown">
        <DesktopFlowBar />
      </MHidden>
      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadFlowBar />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneFlowBar />
        </MHidden>
      </MHidden>
      <Snackbar
        open={isOpened}
        autoHideDuration={5000}
        onClose={() => setIsOpened(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" onClose={() => setIsOpened(false)} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};