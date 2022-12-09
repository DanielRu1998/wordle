# WORDLE

Este es un juego de adivinar la palabra oculta en un tiempo de 5min

## Correr en local
- Clonar el repositorio
- Instala dependencias ``` npm install ```
- Corre en local ``` npm start ```

## Tecnologías usadas
- React + TypeScript
- TailwindCSS

## Patrón de diseño (Compound component)

A continuación la parte de implementación dinámica

```
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
```
### Desarrollador

Daniel Rubio