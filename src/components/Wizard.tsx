import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Wizard = () => {
    const { closeModal } = useContext(WordleContext);

    return (
        <div style={{ backgroundColor: 'yellow' }}>
            Desde Wizard
            <button
                onClick={() => closeModal('showWizard')}
            >Aceptar</button>
        </div>
    )
};