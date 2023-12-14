import { useAccount, useContractReads } from 'wagmi';

import { pointsABI } from '../util/abi';

export const YourBalance = () => {
    const { address } = useAccount();
    const { data, isLoading, isSuccess } = useContractReads({
        enabled: !!address,
        contracts: [
            {
                address: '0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F',
                chainId: 1,
                abi: pointsABI,
                args: [address],
                functionName: 'balanceOf',
            },
            {
                address: '0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F',
                chainId: 1,
                abi: pointsABI,
                functionName: 'decimals',
            },
        ],
    });

    const balance: bigint = data?.[0]?.result as unknown as bigint;
    const decimals: number = data?.[1]?.result as unknown as number;

    console.log({ balance, decimals });
    const nb = address && isSuccess ? balance / BigInt(10 ** decimals) : 0;

    return (
        <div>
            <h2>Your balance</h2>
            <p className="text-right">
                {isLoading && 'Loading...'}
                {address ? (
                    <span>{nb.toLocaleString()} $points</span>
                ) : (
                    <span>🤷‍♀️</span>
                )}
            </p>
        </div>
    );
};
