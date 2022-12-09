import { Provider } from '../context/WorldContext';
import { usePlay, useWordle } from '../hooks';

import { WordleGameProps } from '../interfaces';

export const WordleGame = ({ children, initialValues }: WordleGameProps) => {
    
    const { darkMode, showStatics, showWizard, isWinner, isEndGame, numberOfVictories,
            numberOfGames ,handleDarkMode, setStimulus, openModal, closeModal } = useWordle();

    const { board, keyboardPlay, actualWord, timex, playEvent, resetGame } = usePlay({ initialValues, setStimulus });
    
    return (
        <Provider value={{
            board,
            darkMode,
            isWinner,
            timex,
            isEndGame,
            keyboardPlay,
            handleDarkMode,
            playEvent,
            resetGame,
            openModal,
            closeModal,
        }}
        >
            <div>
                {
                    children({
                        showStatics,
                        showWizard,
                        actualWord,
                        numVictories: numberOfVictories,
                        numGames: numberOfGames,
                        timex,
                    })
                }
            </div>
        </Provider>
    )
};