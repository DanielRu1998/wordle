import { useEffect, useState } from 'react';

import { StimulusContent } from '../interfaces';

export const useWordle = () => {
    const [stimulus, setStimulus] = useState<StimulusContent>({
        darkMode: false,
        isEndGame: false,
        isWinner: false,
        showStatics: false,
        showWizard: true,
        numberOfVictories: 0,
        numberOfGames: 0

    });

    const handleDarkMode = (): void => {
        setStimulus(prev => ({
            ...prev,
            darkMode: !prev.darkMode
        }));
    };

    const openModal = (key: string): void => {
        setStimulus(prev => ({
            ...prev,
            [key]: true
        }));
    }

    const closeModal = (key: string): void => {
        key === 'showWizard' && localStorage.setItem('isFirstTime', 'false');
        setStimulus(prev => ({
            ...prev,
            [key]: false
        }));
    };

    useEffect(() => {
        const firstTime = localStorage.getItem('isFirstTime');
        firstTime && setStimulus(prev => ({
            ...prev,
            showWizard: false
        }));
    }, []);

    return {
        ...stimulus,
        handleDarkMode,
        setStimulus,
        openModal,
        closeModal
    };
};
