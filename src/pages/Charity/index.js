import React from 'react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopCharity from './DesktopCharity';
import IPadCharity from './IPadCharity';
import IPhoneCharity from './IPhoneCharity';

export default function Charity() {
  return (
    <>
      <MHidden width="mdDown">
        <DesktopCharity />
      </MHidden>
      <MHidden width="mdUp">
        <MHidden width="smDown">
          <IPadCharity />
        </MHidden>
        <MHidden width="smUp">
          <IPhoneCharity />
        </MHidden>
      </MHidden>
    </>
  );
}