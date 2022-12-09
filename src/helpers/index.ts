import { ActualWord, KeyboardEntries, BoardEntries, TraceWords } from '../interfaces';

export const keyboardLetters: KeyboardEntries = {
    'Q': '#d4d6da', 'W': '#d4d6da', 'E': '#d4d6da', 'R': '#d4d6da', 'T': '#d4d6da',
    'Y': '#d4d6da', 'U': '#d4d6da', 'I': '#d4d6da', 'O': '#d4d6da', 'P': '#d4d6da',
    'A': '#d4d6da', 'S': '#d4d6da', 'D': '#d4d6da', 'F': '#d4d6da', 'G': '#d4d6da',
    'H': '#d4d6da', 'J': '#d4d6da', 'k': '#d4d6da', 'L': '#d4d6da', 'Ñ': '#d4d6da',
    'ENTER': '#d4d6da', 'Z': '#d4d6da', 'X': '#d4d6da', 'C': '#d4d6da','V': '#d4d6da',
    'B': '#d4d6da', 'N': '#d4d6da', 'M': '#d4d6da', '⌫': '#d4d6da'
};

export const createBoard = (lengthWord: number, attempts: number): BoardEntries => {
    let tempRowMatrix = [];
    let tempMatrix = {} as BoardEntries;
    
    for (let i = 0; i < attempts; i += 1 ) {
        for (let j = 0; j < lengthWord; j += 1) {
            tempRowMatrix.push({ word: '', bg: '#dbddde' });
        }
        tempMatrix[i] = tempRowMatrix;
        tempRowMatrix = [];
    }
    return tempMatrix;
}

export const fragmentWord = (word: string): ActualWord => {
    let body = {} as ActualWord;
    for (let i = 0; i < word.length; i += 1) {
        body[word[i]]
            ?   body[word[i]] = { ...body[word[i]], [i]: true }
            :   body[word[i]] = { [i]: true };
    }
    return body;
}

export const trateWord = (word: string) => {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase();
}

export const manageWords = (library: string[], lengthWord: number, actual: TraceWords) => {
    if (actual.library.length === actual.history.length) {
        const newLibrary = library.filter(word => word.length === lengthWord).map(word => trateWord(word));
        const newEntireWord = newLibrary[Math.floor(Math.random()*newLibrary.length)];
        const newSplitWord = fragmentWord(newEntireWord);
        return {
            entireWord: newEntireWord,
            fragmentWord: newSplitWord,
            history: [newEntireWord],
            library: newLibrary
        }
    }
    let flagRandomWord: boolean = false;
    let entireWord: string = '';
    do {
        entireWord = actual.library[Math.floor(Math.random()*actual.library.length)];
        !actual.history.includes(entireWord) && (flagRandomWord = true);
    } while (!flagRandomWord);
    const splitWord = fragmentWord(entireWord);
    const myHistory = [...actual.history];
    myHistory.push(entireWord);
    return {
        ...actual,
        entireWord: entireWord,
        fragmentWord: splitWord,
        history: myHistory
    }
};
