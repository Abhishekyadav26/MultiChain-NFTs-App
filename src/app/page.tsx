"use client";
import NFTClaimer  from "@/app/components/NFTClaimer"
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  const account = useActiveAccount();

  const AIAContract = getContract({
    client: client,
    chain: defineChain(1320),
    address: "0x2Eb544F8d98952B33EBdE44D1Be1671f61E237b1"
  });

  const LineasepliaContract = getContract({
    client: client,
    chain: defineChain(59141),
    address: "0x9025C0BbDB0E12B865782dE3f1C3688628f8b1F1"
  })
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 ">
          MultiChain
          <br />
          NFTs Transactions
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
          // accountAbstraction={{
          //   chain: defineChain(1320),
          //   sponsorGas: true,
          // }}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={0n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={LineasepliaContract}
          tokenId={0n}
        />
        </div>
      </div>
    </main>
  );
}

