/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useWeb3React } from '@web3-react/core';
import hpbLogo from '../img/logo.png';


export default function ConnectionStatus() {
  const { account } = useWeb3React();

  return (
    <div className="flex-item justify-end">
      <img
        alt="Network logo"
        className="logo"
        src={
          //@ts-ignore
          hpbLogo
        }
      />
      {account ? (
        <p>
          Wallet: {account.slice(0, 6)}...{account.slice(-4)}{' '}
        </p>
      ) : (
        <p> Not connected </p>
      )}
    </div>
  );
}
