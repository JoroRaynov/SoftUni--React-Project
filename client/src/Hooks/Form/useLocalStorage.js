import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const currentStateSerialized = localStorage.getItem(key);

        if (currentStateSerialized) {
            const persistedState = JSON.parse(currentStateSerialized);

            return persistedState;
        }
        return initialValue;
    });

    const setLocalStorageState = (value) =>{ 
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState
    ]
}