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
            <h2 className="flex gap-2">
                <span className="line-through">Max Supply</span>
                <a
                    href="https://etherscan.io/tx/0x3eb38ebce80d0f6a82748134e168ce0bc8138f01bf0f2b64fb22457ef7b2388b"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                >
                    - 750,000,000 burn
                </a>
                <a
                    href="https://etherscan.io/tx/0xf317e7f94f5cf595d7a1e3be75d3d00425bd5f199a0419780431d587eb29f300"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                >
                    - 1,000,000 burn
                </a>
            </h2>
            <p className="text-right">
                <span>
                    {isLoading && 'Loading...'}
                    {data && (
                        <span>
                            {(data / BigInt(10 ** 18)).toLocaleString()}
                        </span>
                    )}
                </span>
                <br />
                <a
                    href="https://etherscan.io/tx/0x3eb38ebce80d0f6a82748134e168ce0bc8138f01bf0f2b64fb22457ef7b2388b"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                >
                    - {750_000_000n.toLocaleString()}
                </a>
                <br />
                <a
                    href="https://etherscan.io/tx/0xf317e7f94f5cf595d7a1e3be75d3d00425bd5f199a0419780431d587eb29f300"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                >
                    - {1_000_000n.toLocaleString()}
                </a>
                <br />
                <span>
                    {data &&
                        (
                            data / BigInt(10 ** 18) -
                            750_000_000n - 1_000_000n
                        ).toLocaleString()}
                </span>
            </p>
        </div>
    );
};
