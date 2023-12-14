import { useContractRead } from 'wagmi';

import { pointsABI } from '../util/abi';

export const MaxSupply = () => {
    const { data, isLoading } = useContractRead({
        address: '0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F',
        chainId: 1,
        abi: pointsABI,
        functionName: 'MAX_SUPPLY',
    });

    const x = data as unknown as bigint;

    return (
        <div>
            <h2>Max Supply</h2>
            <p className="text-right">
                {isLoading && 'Loading...'}
                {data && (
                    <span>{(data / BigInt(10 ** 18)).toLocaleString()}</span>
                )}
            </p>
        </div>
    );
};
