import { useModal } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';

export const ConnectButton = () => {
    const { setOpen } = useModal();
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    if (address)
        return (
            <div className="text-center">
                <button
                    className="link"
                    onClick={() => {
                        disconnect();
                    }}
                >
                    disconnect wallet
                </button>
            </div>
        );

    return (
        <button
            className="w-full px-6 py-3 bg-ens-light-blue-bright hover:bg-ens-light-blue-primary text-white font-bold text-center rounded-lg active:bg-ens-light-blue-active"
            onClick={() => {
                setOpen(true);
            }}
        >
            Connect
        </button>
    );
};
