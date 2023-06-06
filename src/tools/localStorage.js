import initialState from "../redux/state/initialState";

export const loadState = () => {
    const saveData = localStorage.getItem("saveData");
    let state = saveData == null ? initialState : JSON.parse(saveData);
    return state;
};

export const saveData = data => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem("saveData", serializedState);
    } catch {
        // ignore write errors
    }
};

export const removeTokens = () => {
    try {
        localStorage.removeItem("saveData");
    } catch {
        //
    }
};
