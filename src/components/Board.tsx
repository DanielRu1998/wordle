import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';
import { RowBoardEntries } from '../interfaces';

export const Board = () => {
    const { board } = useContext(WordleContext);

    return (
        <div>
            {
                board && Object.keys(board).length > 0 &&
                    Object.values(board).map((rowBoard, boardX) => (
                        <div
                            key={`board-row-${boardX}`}
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            {
                                (rowBoard as RowBoardEntries[]).map((box, boardY) => (
                                    <div
                                        key={`board-item-${boardY}`}
                                        style={{width: '25px', height: '25px', backgroundColor: box.bg, margin: '1rem', color: '#fff' }}
                                    >
                                        {box.word}
                                    </div>
                                ))
                            }
                        </div>    
                    ))
            }
        </div>
    )
};