import { FiExternalLink } from 'react-icons/fi';
import { useAccount } from 'wagmi';

import { ConnectButton } from '../components/ConnectButton';
import { DonatePoints } from '../components/DonatePoints';
import { MaxSupply } from '../components/MaxSupply';
import { YourBalance } from '../components/YourBalance';

export const DEVELOPER_MODE = false;

export const App = () => {
    // eslint-disable-next-line no-undef
    const path = window.location.pathname;
    const name = path.replace('/', '').toLowerCase();
    const { address } = useAccount();

    return (
        <div className="w-full max-w-lg mx-auto space-y-3">
            <div className="w-full bg-ens-light-background-primary border rounded-xl border-ens-light-border p-6 space-y-4">
                <div className="flex justify-between">
                    <h1>
                        $points{' '}
                        <span className="text-sm font-normal text-ens-light-pink-primary">
                            are cool
                        </span>
                    </h1>
                    <a
                        href="https://etherscan.io/token/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F"
                        target="_blank"
                        className="text-sm link"
                        rel="noreferrer"
                    >
                        View on etherscan
                        <FiExternalLink className="inline-block ml-1" />
                    </a>
                </div>
                <p>
                    Not farcaster affiliated, yet the first/best farcaster
                    memecoin to date. Join the fun, give it a run, and plz touch
                    grass.
                </p>
                <p>
                    Started by{' '}
                    <a
                        href="https://warpcast.com/iammatthias.eth"
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                    >
                        iammatthias.eth
                    </a>{' '}
                    at{' '}
                    <a href="https://points-token.vercel.app/">points-token</a>
                </p>
                <div>
                    <MaxSupply />
                </div>
                <div>
                    <YourBalance />
                </div>
                {address && (
                    <div>
                        <DonatePoints />
                    </div>
                )}
                <a
                    href="https://swap.cow.fi/#/1/swap/eth/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F"
                    target="_blank"
                    rel="noreferrer"
                    className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-pink-bright hover:bg-ens-light-pink-primary text-white font-bold text-center rounded-lg active:bg-ens-light-pink-active"
                >
                    Trade on CowSwap to be MEV protected <FiExternalLink />
                </a>
                <div className="grid grid-cols-2 gap-4">
                    <a
                        href="https://dexscreener.com/ethereum/0xa424817985051ccda51eff2dc7998b5d68079215"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-indigo-bright hover:bg-ens-light-indigo-primary text-white font-bold text-center rounded-lg active:bg-ens-light-indigo-active"
                    >
                        Dexscreener <FiExternalLink />
                    </a>
                    <a
                        href="https://www.geckoterminal.com/eth/pools/0xa424817985051ccda51eff2dc7998b5d68079215"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-green-bright hover:bg-ens-light-green-primary text-white font-bold text-center rounded-lg active:bg-ens-light-green-active"
                    >
                        CoinGecko <FiExternalLink />
                    </a>
                    <a
                        href="https://twitter.com/PointsMemeCoin"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-blue-bright hover:bg-ens-light-blue-primary text-white font-bold text-center rounded-lg active:bg-ens-light-blue-active"
                    >
                        X <FiExternalLink />
                    </a>
                    <a
                        href="https://dune.com/isiain/memepoints"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-orange-bright hover:bg-ens-light-orange-primary text-white font-bold text-center rounded-lg active:bg-ens-light-orange-active"
                    >
                        DuneDashboard <FiExternalLink />
                    </a>
                    <a
                        href="https://t.me/pointserc20"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-blue-bright hover:bg-ens-light-blue-primary text-white font-bold text-center rounded-lg active:bg-ens-light-blue-active"
                    >
                        Telegram Group <FiExternalLink />
                    </a>
                    <a
                        href="https://warpcast.com/~/channel/points"
                        target="_blank"
                        rel="noreferrer"
                        className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-purple-bright hover:bg-ens-light-purple-primary text-white font-bold text-center rounded-lg active:bg-ens-light-purple-active"
                    >
                        Farcaster Channel <FiExternalLink />
                    </a>
                </div>
                <a
                    href="https://onvote.app/organization/0x8fc30a4c3d11b3b866947c29e4a5525d71f1ff33"
                    target="_blank"
                    rel="noreferrer"
                    className="justify-center w-full px-6 py-3 flex gap-2 items-center bg-ens-light-pink-bright hover:bg-ens-light-pink-primary text-white font-bold text-center rounded-lg active:bg-ens-light-pink-active"
                >
                    Vote for the future of $POINTS on OnVote <FiExternalLink />
                </a>
            </div>
            <div className="mx-auto flex items-center justify-center gap-2">
                <span>made with</span>
                <a href="https://v3x.fyi/s1" target="_blank" rel="noreferrer">
                    <img src="/rick.png" className="h-8" alt="love" />
                </a>
                <span>by</span>
                <a
                    href="https://warpcast.com/luc.eth"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                >
                    luc.eth
                </a>
            </div>
        </div>
    );
};
