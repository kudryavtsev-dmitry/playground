export const addPlace = (placeName: string) => ({
  type: 'ADD_PLACE',
  payload: {
    placeName,
  },
});
