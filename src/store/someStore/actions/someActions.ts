import {SomeActionsNamesEnum} from "../enums/someActionsNames.enum";

export type ChangeKey1ActionType = { type: SomeActionsNamesEnum, payload: number };
const changeKey1Action = (key: number): ChangeKey1ActionType => ({
    type: SomeActionsNamesEnum.CHANGE_KEY_1,
    payload: key,
});

export type ChangeKey2ActionType = { type: SomeActionsNamesEnum, payload: string };
const changeKey2Action = (key: string): ChangeKey2ActionType => ({
    type: SomeActionsNamesEnum.CHANGE_KEY_2,
    payload: key,
});

export const someActions = {
    changeKey1Action,
    changeKey2Action,
}
