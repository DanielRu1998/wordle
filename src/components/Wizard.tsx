import { useContext } from 'react';
import { WordleContext } from '../context/WorldContext';

export const Wizard = () => {
    const { closeModal, darkMode } = useContext(WordleContext);

    return (
        <div className={`flex flex-row justify-center outline-none overflow-x-hidden overflow-y-auto items-center fixed w-full h-screen top-0 left-0 ${darkMode ? 'bg-darkOpacity': 'bg-whiteOpacity'}`}>
            <div className={`select-none flex flex-col justify-between z-10 py-6 px-12 absolute rounded border-black border ${darkMode ? 'bg-screenB border-white text-white': 'bg-screenW border-black text-black'}`}>
                <h3 className="text-3xl font-black text-center mb-6">Cómo jugar</h3>
                <p>Adivina la palabra oculta en cinco intentos.<br /> <br /> 
                   Cada intento debe ser una palabra válida de 5 letras. <br /> <br /> 
                   Después de cada intento el color de las letras cambia  <br />
                   para mostrar qué tan cerca estás de acertar la palabra.
                </p>
                <h3 className="text-lg font-black my-4">Ejemplos</h3>
                <div className={`flex flex-row flex-nowrap justify-center items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white' : 'border-black'} rounded-md bg-buttonGreen w-16 h-16`}>G</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>A</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>T</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>O</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>S</div>
                </div>
                <p className="my-4">La letra <b>G</b> está en la palabra y en la posición correcta.</p>
                <div className={`flex flex-row flex-nowrap justify-center items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>V</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>O</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white' : 'border-black'} rounded-md bg-moztace w-16 h-16`}>C</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>A</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md  w-16 h-16`}>L</div>
                </div>
                <p className="my-4">La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
                <div className={`flex flex-row flex-nowrap justify-center items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>C</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>A</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>N</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white bg-screenB' : 'border-black bg-white'} border rounded-md w-16 h-16`}>T</div>
                    <div className={`flex flex-row justify-center items-center m-1 text-3xl font-black boxSur ${darkMode ? 'border-white' : 'border-black'} rounded-md bg-noExist w-16 h-16`}>O</div>
                </div>
                <p className="mt-4 mb-6">La letra <b>O</b> no está en la palabra.</p>
                <p>Puede haber letras repetidas. Las pistas son <br />independientes para cada letra.</p>
                <p className="text-center my-6">¡Una palabra nueva cada 5 minutos!</p>
                <button
                    className="m-auto bg-buttonGreen rounded text-white w-48 h-10 text-lg font-black"
                    onClick={() => closeModal('showWizard')}
                >¡JUGAR!</button>
            </div>
        </div>
    )
};