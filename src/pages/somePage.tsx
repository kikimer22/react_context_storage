import {SomeComponent} from "../shared/components/someComponent/someConponent";
import {useSomeContext} from "../store/someStore/hooks/useSomeContext";
import {someActions} from "../store/someStore/actions/someActions";

export const SomePage = () => {
    const {
        dispatch,
        state,
    } = useSomeContext();

    return (
        <div>
            <h1>some text</h1>
            <div>someKey1: <b>{state.someKey1}</b></div>
            <div>someKey2: <b>{state.someKey2}</b></div>
            <SomeComponent/>
            <button onClick={() => dispatch(someActions.changeKey1Action(13))}>change to 13</button>
        </div>
    );
}
