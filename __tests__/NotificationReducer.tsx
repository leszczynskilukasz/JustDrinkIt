import notifications, { updateListNotifications } from '../src/redux/notificationsSlice';

const initialState: string[] = [];
const expectedState: string[] = ['FirstData', 'SecondData'];
const { reducer } = notifications;
it('should handle ADD_TODO', () => {
  expect(
    reducer(initialState, {
      type: updateListNotifications.type,
      payload: expectedState,
    }),
  ).toEqual(expectedState);
});
