import {
    useAccount,
    useContractReads,
    useContractWrite,
    usePrepareContractWrite,
} from 'wagmi';

import { pointsABI } from '../util/abi';

export const DonatePoints = () => {
    const { address } = useAccount();
    const { config, isLoading, isSuccess } = usePrepareContractWrite({
        enabled: !!address,
        address: '0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F',
        chainId: 1,
        abi: pointsABI,
        args: [
            '0x225f137127d9067788314bc7fcc1f36746a3c3B5',
            1_000_000_000_000_000_000_000,
        ],
        functionName: 'transfer',
    });
    const { data: pointsBalance, isSuccess: pointsBalanceisSuccess } =
        useContractReads({
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

    const balance: bigint = pointsBalance?.[0]?.result as unknown as bigint;
    const decimals: number = pointsBalance?.[1]?.result as unknown as number;

    console.log({ balance, decimals });
    const nb =
        address && pointsBalanceisSuccess
            ? balance / BigInt(10 ** decimals)
            : 0;

    const { data, write } = useContractWrite(config);

    return (
        <div>
            <h2>Give tokens to buildor</h2>
            <p className="text-right">
                {isLoading && 'Loading...'}
                {nb > 1000 ? (
                    <button
                        onClick={() => {
                            write();
                        }}
                        className="w-1/3 text-xs px-2 py-3 bg-ens-light-blue-bright hover:bg-ens-light-blue-primary text-white font-bold text-center rounded-lg active:bg-ens-light-blue-active"
                    >
                        Gib smol amount
                    </button>
                ) : (
                    <span>nvm u broke, sowy</span>
                )}
            </p>
        </div>
    );
};
