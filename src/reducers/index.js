import * as types from '../constants';
import update from 'react/lib/update';

export default function posts(state = {
  lastFetched: null,
  isLoading: false,
  error: null,
  data: [],
}, action) {
  switch (action.type) {
    case types.FETCH_POSTLIST_REQUEST:
      return update(state, {
        isLoading: { $set: action.isLoading },
      });
    case types.FETCH_POSTLIST_SUCCESS:
      return update(state, {
        data: { $set: action.data },
        lastFetched: { $set: action.lastFetched },
        isLoading: { $set: false },
      });
    case types.FETCH_POSTLIST_FAILURE:
      return update(state, {
        error: { $set: action.error },
      });
    default:
      return state;
  }
}
