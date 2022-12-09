import { useEffect, useState } from 'react';

import library from "../data/words.txt"

import { WordleGame, Nav, Board, Keyboard, Statics, Wizard } from '../components';

export const Feed = () => {
    const [myLibrary, setMyLibrary] = useState([] as string[]);

    const getWords = async() => {
        const file = await fetch(library);
        const data = await file.text();
        setMyLibrary(data.split('\n'));
    };

    useEffect(() => {
        getWords();
    }, []);

    return (
        <>
            {
                myLibrary && myLibrary.length > 0 ?
                (
                    <WordleGame
                        initialValues={{
                            library: myLibrary,
                            attempts: 5,
                            lengthOfWord: 5,
                            timeInMinutes: 5,
                        }}
                    >
                        {
                            ({ showStatics, showWizard, actualWord, numGames, numVictories }) => (
                                <>
                                    <Nav />
                                    <Board />
                                    <Keyboard />
                                    { showStatics && 
                                        <Statics
                                            actualWord={actualWord}
                                            numGames={numGames}
                                            numVictories={numVictories}
                                        /> 
                                    }
                                    { showWizard  && <Wizard /> }
                                </>
                            )
                        }
                    </WordleGame>
                ) : null
            }
        </>
    )
};
