import { ActionType } from '..';

enum PlacesTypes {
  ADD_PLACE = 'ADD_PLACE',
}

type PlacesState = {
  places: string[];
};

const initialState: PlacesState = {
  places: ['test1', 'test2'],
};

export const placesReducer = (state = initialState, action: ActionType<{ placeName: string }>) => {
  console.log('action', action);
  switch (action.type) {
    case PlacesTypes.ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload.placeName],
      };
    default:
      return state;
  }
};
