import { contentDetails } from "./contentaction"
import * as actions from './contentaction'
import * as types from '../../actiontype/actiontypes'


test('Sample Test', () => {
    expect(true).toBeTruthy();
  });
  test('contentDetails', () => {
      expect.stringContaining("right");
  });

  describe('actions', () => {
    it('should create an action to contentDetails', () => {
      const data = "data"
      const expectedAction = {
        type: types.CONTENT_SUCCESS,
        data
      }
      expect.contentDetails(data).toEqual(expectedAction)
    })
  })

console.log(contentDetails);