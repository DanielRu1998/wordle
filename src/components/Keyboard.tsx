import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Keyboard = () => {
    const { keyboardPlay, playEvent } = useContext(WordleContext);
    const keyboardToPrint: string[][] = keyboardPlay && [
        Object.entries(keyboardPlay).slice(0, 10),
        Object.entries(keyboardPlay).slice(10, 20),
        Object.entries(keyboardPlay).slice(20, 29)
    ];

    return (
        <div>
            {
                keyboardToPrint && keyboardToPrint.map((row, indexRow) => (
                    <div  key={`row-keyboard-${indexRow}`} style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            row.map(letter => (
                                <div key={`letter-${letter[0]}`}>
                                    <button
                                        style={{ backgroundColor: `${letter[1]}` }}
                                        onClick={() => playEvent(letter[0])}
                                    >
                                        {letter[0]}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
};