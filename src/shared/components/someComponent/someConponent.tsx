import {useSomeContext} from "../../../store/someStore/hooks/useSomeContext";

export const SomeComponent = () => {
    const {
        state,
    } = useSomeContext();

    return (
        <div>
            <h2>component title</h2>
            <div>someKey1: <b>{state.someKey1}</b></div>
            <div>someKey2: <b>{state.someKey2}</b></div>
        </div>
    );
}
