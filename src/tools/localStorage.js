import store from "../redux/store";

export const saveData = () => {
    let data = store.getState();
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
