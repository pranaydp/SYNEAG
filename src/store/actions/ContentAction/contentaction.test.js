import * as types from '../../actiontype/actiontypes'


export function contentDetails(text) {
	return {
		type: types.CONTENT_SUCCESS,
		text,
	};
}

test('Sample Test', () => {
    expect(true).toBeTruthy();
  });
  test('contentDetails', () => {
      expect.stringContaining("right");
  });

  describe('actions', () => {
    it('should create an action to contentDetails', () => {
      const expectedAction = {
        type: types.CONTENT_SUCCESS,
      };
      expect(contentDetails()).toEqual(expectedAction)
    })
  })

console.log(contentDetails);