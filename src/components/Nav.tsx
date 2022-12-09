import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Nav = () => {
    const { darkMode, openModal, handleDarkMode } = useContext(WordleContext);

    return (
        <div className={`w-full flex flex-row flex-nowrap justify-between items-center px-4 rounded-lg h-20 ${darkMode ? 'bg-navN' : 'bg-navM'}`}>
            <svg
                className="w-6 h-6 cursor-pointer w-20 h-20"
                style={{transform: 'scale(1.4)'}}
                onClick={() => openModal('showWizard')}
                fill={darkMode ? '#fff' : '#818181'}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            ><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
            <span className={`text-4xl tracking-wider ml-20 ${darkMode ? 'text-white' : 'text-black' }`}>WORDLE</span>
            <div className="flex flex-row flex-nowrap justify-center items-center mx-1">
                <svg
                    className="w-6 h-6 cursor-pointer"
                    style={{transform: 'scale(1.4)'}}
                    onClick={() => openModal('showStatics')}
                    fill={darkMode ? '#fff' : '#818181'}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                ><path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path></svg>
                <div className="w-14 h-8 ml-3">
                    <input type="checkbox" id="dark-mode-toggle" className="hidden" onChange={handleDarkMode} />
                    <label
                        htmlFor="dark-mode-toggle"
                        className={`w-full h-full rounded-full p-1 flex justify-between cursor-pointer ${darkMode ? 'bg-nigth' : 'bg-morning'}`}
                    >
                        <span className={darkMode ? 'hidden dark:inline' : 'inline dark:hidden'}>🌞</span>
                        <span className={`w-6 h-6 rounded-full block float-right dark:float-left ${darkMode ? 'bg-toogleN' : 'bg-toogleM'}`}></span>
                        <span className={darkMode ? 'inline dark:hidden' : 'hidden dark:inline'}>🌛</span>
                    </label>
                </div>
            </div>
        </div>
    )
};
