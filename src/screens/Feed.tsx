//import { useEffect, useState } from 'react';

//import library from "../data/words.txt"

import { WordleGame, Nav, Board, Keyboard, Statics, Wizard } from '../components';

const myLibrary: string[] = ['ARBOL', 'PETRA', 'BEBES', 'ATRAS', 'FRIOS', 'TOTEM', 'HOJAS', 'JUJUS', 'POLEA', 'JARDI', 'KIKIS', 'MEMES', 'DRIKA', 'TOTEM', 'MAGOS'];

export const Feed = () => {
    /* const [myLibrary, setMyLibrary] = useState([] as string[]);

     const getWords = async() => {
        const file = await fetch(library);
        const data = await file.text();
        setMyLibrary(data.split('\n'));
    };
    useEffect(() => {
        getWords();
    }, []); */

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
                            ({ showStatics, showWizard, actualWord, numGames, numVictories, darkMode }) => (
                                <div className={`flex flex-col items-center w-full h-screen ${darkMode ? 'bg-screenB' : 'bg-screenW'}`}>
                                    <div className="tam-screen mt-10">
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
                                    </div>
                                </div>
                            )
                        }
                    </WordleGame>
                ) : null
            }
        </>
    )
};
