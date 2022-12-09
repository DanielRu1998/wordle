import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

import { StaticsProps } from '../interfaces';

export const Statics = ({actualWord, numGames, numVictories}: StaticsProps) => {
    const { isWinner, isEndGame, closeModal, resetGame, timex, darkMode } = useContext(WordleContext);

    const handleCloseStatics = () => {
        if (isWinner || isEndGame) {
            resetGame();
            return;
        }
        closeModal('showStatics');
    }

    return (
        <div className={`flex flex-row justify-center items-center outline-none overflow-x-hidden overflow-y-auto fixed w-full h-screen top-0 left-0 ${darkMode ? 'bg-darkOpacity': 'bg-whiteOpacity'}`}>
            <div style={{height: '30rem'}} className={`select-none flex flex-col justify-between items-center z-10 py-10 absolute rounded border-black border tam-screen text-center ${darkMode ? 'bg-screenB border-white text-white': 'bg-screenW border-black text-black'}`}>
                <h3 className="text-3xl font-black">Estadísticas</h3>
                <div className="w-full flex flex-row justify-around items-center">
                    <div>
                        <p className="text-3xl font-black">{numGames}</p>
                        <p>Jugadas</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black">{numVictories}</p>
                        <p>Victorias</p>
                    </div>
                </div>
                {isEndGame ? <p>La palabra era: <b>{actualWord}</b></p> : null}
                <div>
                    <p>SIGUIENTE PALABRA</p>
                    <p className="text-xl font-black">
                        {`${timex[0] < 10 ? '0'+timex[0] : timex[0]}:${timex[1] < 10 ? '0'+timex[1] : timex[1]}`}
                    </p>
                </div>
                <button
                    className="bg-buttonGreen rounded text-white w-48 h-10 text-lg font-black"
                    onClick={handleCloseStatics}
                >Aceptar</button>
            </div>
        </div>
    )
};