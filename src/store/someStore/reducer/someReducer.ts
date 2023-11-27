import {SomeActions, SomeState} from "../types/someTypes.types";
import {SomeActionsNamesEnum} from "../enums/someActionsNames.enum";

export const someReducer = (state: SomeState, action: SomeActions): SomeState => {
    const {type, payload} = action;
    switch (type) {
        case SomeActionsNamesEnum.CHANGE_KEY_1:
            return {...state, someKey1: payload as number};
        case SomeActionsNamesEnum.CHANGE_KEY_2:
            return {...state, someKey2: payload as string};
        default:
            return state;
    }
}
