import { ActionType } from '../index';

enum MenuActionTypes {
  OPEN_MENU = 'OPEN_MENU',
  CLOSE_MENU = 'CLOSE_MENU',
}
const initialState = {
  isOpen: false,
};

export const menuStore = (state = initialState, action: ActionType<{}>) => {
  console.log('action', action);
  switch (action.type) {
    case MenuActionTypes.OPEN_MENU:
      return {
        ...state,
        isOpen: true,
      };
    case MenuActionTypes.CLOSE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
