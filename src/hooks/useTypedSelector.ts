// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from '../stores';

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
