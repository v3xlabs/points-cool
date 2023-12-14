import { FiExternalLink } from 'react-icons/fi';
import { useAccount } from 'wagmi';

import { ConnectButton } from '../components/ConnectButton';
import { MaxSupply } from '../components/MaxSupply';
import { YourBalance } from '../components/YourBalance';

export const DEVELOPER_MODE = false;

export const App = () => {
    // eslint-disable-next-line no-undef
    const path = window.location.pathname;
    const name = path.replace('/', '').toLowerCase();
    const { address } = useAccount();

    return (
        <div className="w-full max-w-lg mx-auto bg-ens-light-background-primary border rounded-xl border-ens-light-border p-6 space-y-4">
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
                Not farcaster affiliated, yet the first/best farcaster memecoin
                to date. Join the fun, give it a run, and plz touch grass.
            </p>
            <div>
                <MaxSupply />
            </div>
            <div>
                <YourBalance />
            </div>
            <ConnectButton />
        </div>
    );
};
