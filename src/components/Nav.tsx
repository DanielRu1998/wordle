import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Nav = () => {
    const { darkMode, openModal, handleDarkMode } = useContext(WordleContext);

    return (
        <div>
            <button onClick={() => openModal('showWizard')}>?</button>
            <span style={{color: `${darkMode ? 'green' : 'red'}`}}>WORDLE</span>
            <div>
                <button  onClick={() => openModal('showStatics')}>||</button>
                <button onClick={handleDarkMode}>oo</button>
            </div>
        </div>
    )
};
