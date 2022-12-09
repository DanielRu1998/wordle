import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

import { StaticsProps } from '../interfaces';

export const Statics = ({actualWord, numGames, numVictories}: StaticsProps) => {
    const { isWinner, isEndGame, closeModal, resetGame, timex } = useContext(WordleContext);

    const handleCloseStatics = () => {
        if (isWinner || isEndGame) {
            resetGame();
            return;
        }
        closeModal('showStatics');
    }

    return (
        <div style={{backgroundColor: 'yellow'}}>
            <p>Jugadas: {numGames} </p>
            <p>Victorias: {numVictories} </p>
            {isEndGame ? <p>La palabra era: {actualWord}</p> : null}
            Siguiente palabra en:
            <p>
                {`${timex[0] < 10 ? '0'+timex[0] : timex[0]}:${timex[1] < 10 ? '0'+timex[1] : timex[1]}`}
            </p>
            <button
                onClick={handleCloseStatics}
            >Aceptar</button>
        </div>
    )
};