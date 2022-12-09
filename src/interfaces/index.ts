import { Dispatch, SetStateAction } from 'react';

export interface WordleGameProps {
    children: (args: WordleGameHandlers ) => JSX.Element;
    initialValues: InitialValues;
}

export interface WordleGameHandlers {
    actualWord: string;
    numVictories: number;
    numGames: number;
    showStatics: boolean;
    showWizard: boolean;
    timex: number[]
}

export interface InitialValues {
    attempts: number;
    library: string[];
    lengthOfWord: number;
    timeInMinutes: number;
}
export interface StimulusContent {
    darkMode: boolean;
    isEndGame: boolean;
    isWinner: boolean;
    numberOfVictories: number;
    numberOfGames: number;
    showStatics: boolean;
    showWizard: boolean;
}

export interface useBoardProps {
    initialValues: InitialValues;
    setStimulus: Dispatch<SetStateAction<StimulusContent>>;
}

export interface TraceWords {
    entireWord: string;
    fragmentWord: ActualWord;
    history: string[];
    library: string[];
}

export interface ActualWord {
    [letter: string]: {[position: number]: boolean };
}

export interface BoardEntries {
    [word: number]: RowBoardEntries[];
}

export interface RowBoardEntries {
    bg: string;
    word: string;
}

export interface KeyboardEntries { 
    [letter: string]: string; 
}

export interface StaticsProps {
    actualWord: string;
    numGames: number;
    numVictories: number;
}