import { ConnectKitProvider } from 'connectkit';
import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { mainnet } from 'viem/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
        new CoinbaseWalletConnector({
            chains,
            options: { appName: metadata.name },
        }),
    ],
    publicClient,
});

export const Document: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <ConnectKitProvider>{children}</ConnectKitProvider>
        </WagmiConfig>
    );
};
