import {SomeActionsNamesEnum} from "../enums/someActionsNames.enum";

export type SomeState = {
    someKey1: number;
    someKey2: string;
};

export type SomeActions = { type: SomeActionsNamesEnum; payload: number } | {
    type: SomeActionsNamesEnum;
    payload: string
};

export type SomeDispatch = (action: SomeActions) => void;

export type SameStore = {
    state: SomeState;
    dispatch: SomeDispatch;
};
