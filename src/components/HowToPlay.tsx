import { Dispatch, SetStateAction } from 'react';

interface HowToPlayProps {
    setFirstTime: Dispatch<SetStateAction<boolean>>
}

export const HowToPlay = ({ setFirstTime }: HowToPlayProps) => {

    const goToPlay = () => {
        localStorage.setItem('isFirstTime', 'true');
        setFirstTime(false);
    };

    return (
        <>
            <h1>How to play</h1>
            <button
                onClick={goToPlay}
            >
                !JUGAR!
            </button>
        </>
    )
};
