import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Keyboard = () => {
    const { keyboardPlay, playEvent, darkMode } = useContext(WordleContext);
    const keyboardToPrint: string[][] = keyboardPlay && [
        Object.entries(keyboardPlay).slice(0, 10),
        Object.entries(keyboardPlay).slice(10, 20),
        Object.entries(keyboardPlay).slice(20, 29)
    ];

    return (
        <div className={`flex flex-col justify-center items-center py-5 px-2 rounded-md ${darkMode ? 'bg-keyboardN' : 'bg-keyboardM'}`}>
            {
                keyboardToPrint && keyboardToPrint.map((row, indexRow) => (
                    <div 
                        key={`row-keyboard-${indexRow}`}
                        className={`flex flex-row ${indexRow === 0 ? 'ml-1' : (indexRow === 1 ? 'ml-10' : 'ml-0')}`}
                    >
                        {
                            row.map(letter => (
                                <div key={`letter-${letter[0]}`}>
                                    <div
                                        className={`flex flex-row justify-center items-center m-1 text-1xl rounded-md h-11 cursor-pointer
                                        ${(letter[0] === 'ENTER' || letter[0] === '⌫') ? 'w-20' : 'w-10'} ${darkMode ? 'text-white' : 'text-black'}`}
                                        style={{ backgroundColor: `${darkMode ? (letter[1] === '#d4d6da' ? '#565f7f' : letter[1]) : letter[1]}`}}
                                        onClick={() => playEvent(letter[0])}
                                    >
                                        {letter[0]}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
};