import React from 'react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopDao from './DesktopDao';
import IPadDao from './IPadDao';
import IPhoneDao from './IPhoneDao';

export default function Dao() {
  return (
    <>
      <MHidden width="mdDown">
        <DesktopDao />
      </MHidden>
      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadDao />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneDao />
        </MHidden>
      </MHidden>
    </>
  );
}