import {createContext} from 'react';
import {SameStore} from "../types/someTypes.types";

export const SomeContext = createContext<SameStore | undefined>(undefined);
