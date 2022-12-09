import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';
import { RowBoardEntries } from '../interfaces';

export const Board = () => {
    const { board, darkMode } = useContext(WordleContext);

    return (
        <div className="w-full flex flex-col justify-center items-center mt-16 mb-12">
            {
                board && Object.keys(board).length > 0 &&
                    Object.values(board).map((rowBoard, boardX) => (
                        <div
                            key={`board-row-${boardX}`}
                            className="flex flex-row flex-nowrap"
                        >
                            {
                                (rowBoard as RowBoardEntries[]).map((box, boardY) => (
                                    <div
                                        key={`board-item-${boardY}`}
                                        style={{backgroundColor: `${darkMode ? (box.bg === '#dbddde' ? '#3c4150' : box.bg) : box.bg}`}}
                                        className={`flex flex-row justify-center items-center m-1 text-3xl text-white font-black rounded-md w-20 h-20`}
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