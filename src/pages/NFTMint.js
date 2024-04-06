import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import abi from "../../contract/abi.json";
import Web3 from "web3";
import { ethers } from "ethers";
import { useAccount } from 'wagmi';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from "wagmi";

const web3 = new Web3();

// https://i.seadn.io/s/raw/files/7c828410dcb09a5db34c089c0814f2ba.png

const NFTMint = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imgName, setImgName] = useState(null);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  useEffect(() => {
    switchNetwork?.(8001);
  }, [chain])

  const photoNFTContract = {
    address: abi.contractAddress,
    abi: abi.abi,
  };

  const { config } = usePrepareContractWrite({
    address: abi.contractAddress,
    abi: abi.abi,
    functionName: "mint",
    args: [imageUrl, web3.utils.toWei((0.1).toString(), "ether"), imgName],
  });

  const { write: mint, isSuccess: swapSuccess } = useContractWrite(config);

  const handleInputImageUrl = (e) => {
    setImageUrl(e.target.value.toString());
  };

  const handleInputImageName = (e) => {
    setImgName(e.target.value.toString());
  };


  const Mint = () => {
    if (address == undefined) {
      window.alert("Please contact Wallet");
    }
    else {
      if (chain.id !== 8001) {
        window.alert("Please switch to Polygon Test Net");
      }
      else {
        if (imageUrl == null || imgName == null) {
          window.alert("Input Art data set for minting");
        }
        else {
          mint?.();
        }
      }

    }
  };

  return (
    <div className="overflow-hidden relative min-h-[calc(100vh_-_100px)] md:min-h-[calc(100vh_-_110px)]">
      <div className="mosh-container-normal pt-14 md:pt-[73px] pb-14 relative z-[1]">
        <div className="login bg-sweetDark border rounded-xl font-open-sans border-MoshDark-6 shadow-login w-full max-w-[490px] mx-auto  p-6 sm:p-[30px] lg:p-[35px]">
          <div className="flex items-center justify-center">
            <span className="text-red-500 text-4xl font-bold">Art Mint</span>
          </div>
          <p className="mt-4 text-sm text-center  px-3  mx-auto !leading-relaxed font-bold"></p>

          <div className="my-4">
            <input
              className="w-full h-12 px-4 rounded-md  placeholder:text-sweetDark text-black"
              type="text"
              placeholder="Please input the Art url"
              onChange={(e) => handleInputImageUrl(e)}
            />
          </div>

          <div className="my-4">
            <input
              className="w-full h-12 px-4 rounded-md  placeholder:text-sweetDark text-black"
              type="text"
              placeholder="Please input the Art name"
              onChange={(e) => handleInputImageName(e)}
            />
          </div>
          <div>
            <button
              className="block w-full h-12 px-4 font-semibold capitalize rounded-md bg-sweetTurquoise hover:bg-opacity-90 text-MoshDark-7"
              onClick={() => Mint()}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTMint;
