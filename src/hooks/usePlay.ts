import { useEffect, useRef, useState } from 'react';
import { createBoard, manageWords, keyboardLetters } from '../helpers';

import { KeyboardEntries, BoardEntries, useBoardProps, TraceWords } from '../interfaces';

export const usePlay = ({ initialValues, setStimulus } : useBoardProps) => {
    if((initialValues.attempts < 1) || (initialValues.lengthOfWord < 1) || (initialValues.timeInMinutes < 1)) {
        throw new Error('Valores iniciales deben ser mayores a 0');
    }
    const [board, setBoard] = useState({} as BoardEntries);
    const [words, setWords] = useState<TraceWords>({
        entireWord: '',
        fragmentWord: {},
        history: [],
        library: []
    });
    const [keyboardPlay, setKeyboardPlay] = useState({} as KeyboardEntries)
    const [position, setPosition] = useState<number[]>([0, 0]);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [timex, setTimex] = useState<number[]>([initialValues.timeInMinutes, 0]);

    const refTimer = useRef<NodeJS.Timeout>();
    const refTimerCoutdown = useRef<NodeJS.Timeout>();

    const resetGame = (firstTime: boolean = false) => {
        const newBoard = createBoard(initialValues.lengthOfWord, initialValues.attempts);
        let newWord = manageWords( initialValues.library, initialValues.lengthOfWord, {
            ...words,
            library: firstTime ? [] : words.library
        });
        console.log('Main data: ', newWord);
        setTimex([initialValues.timeInMinutes, 0]);
        setWords(newWord);
        setBoard(newBoard);

        setKeyboardPlay(keyboardLetters);
        setPosition([0, 0]);
        setCorrectAnswers(0);
        setStimulus(prev => ({
            ...prev,
            isEndGame: false,
            isWinner: false,
            showStatics: false
        }));
    }

    const managePosition = () => {
        if (position[0] === (initialValues.attempts - 1) &&
            position[1] === (initialValues.lengthOfWord - 1)) {
            setStimulus(prev => ({
                ...prev,
                isEndGame: true,
                numberOfGames: prev.numberOfGames + 1,
                showStatics: true
            }));
        } else {
            if (position[1] === (initialValues.lengthOfWord - 1) ) {
                setPosition([position[0] + 1, 0]);
                setKeyboardPlay(keyboardLetters);
                setCorrectAnswers(0);
            } else {
                setPosition([position[0], position[1] + 1]);
            }
        }
    }

    const getColorBox = (letter: string): [boolean, string] => {
        if (!words.fragmentWord.hasOwnProperty(letter)) return [false, '#949b9f'];
        if (words.fragmentWord[letter].hasOwnProperty(position[1])) {
            if (correctAnswers + 1 === words.entireWord.length) {
                setStimulus(prev => ({
                    ...prev,
                    isWinner: true,
                    numberOfGames: prev.numberOfGames + 1,
                    numberOfVictories: prev.numberOfVictories + 1,
                    showStatics: true
                }));
                return [true, '#66a15f'];
            }
            setCorrectAnswers(prev => prev + 1);
            return [false, '#66a15f'];
        }
        return [false, '#ceb02c'];
    }

    const playEvent = (letter: string) => {
        if (letter === 'ENTER' || letter === '⌫') return;
        const wizardPlayer = getColorBox(letter);

        const rowActual = [...board[position[0]]];
        rowActual[position[1]] = {
            bg: wizardPlayer[1],
            word: letter,
        };

        setBoard(prev => ({
            ...prev,
            [position[0]]: rowActual
        }));

        setKeyboardPlay(prev => ({
            ...prev,
            [letter]: wizardPlayer[1]
        }));
        
        !wizardPlayer[0] && managePosition();  
    };

    useEffect(() => {
        resetGame(true);
    }, [initialValues]);

    useEffect(() => {
        refTimer.current && clearInterval(refTimer.current);
        refTimer.current = setInterval(() => resetGame(), 1000 * 60 * initialValues.timeInMinutes);
    }, [words]);

    useEffect(() => {
        refTimerCoutdown.current && clearInterval(refTimerCoutdown.current);
        refTimerCoutdown.current = setInterval(() => {
            if (timex[0] === 0 && timex[1] === 0) return;
            timex[1] === 0 ? setTimex([timex[0] - 1, 59])
                : setTimex([timex[0], timex[1] - 1]);
        }, 1000);
    }, [timex]);

    return {
        actualWord: words.entireWord,
        board,
        timex,
        keyboardPlay,
        playEvent,
        resetGame
    }
};