import { expect } from 'chai';
import * as actions from '../src/actions/PostActions';
import * as types from '../src/constants';

const fakeDB = [
  {
    id: 'abcd190d',
    title: 'How\'s business? Boomin',
    slug: 'hows-business-boomin',
    content: 'Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. I’m up to something. Fan luv. Lion! The key is to drink coconut, fresh coconut, trust me. Cloth talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
  },
  {
    id: 'xys190d',
    title: 'The Pathway to more success',
    slug: 'the-pathway-to-more-success',
    content: 'Find peace, life is like a water fall, you’ve gotta flow. Find peace, life is like a water fall, you’ve gotta flow. Eliptical talk. The key is to drink coconut, fresh coconut, trust me. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They don’t want us to eat. The key to more success is to get a massage once a week, very important, major key, cloth talk. They never said winning was easy. Some people can’t handle success, I can. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.',
  },
  {
    id: '128sd043hd',
    title: 'Cloth Talk Part I',
    slug: 'cloth-talk-part-i',
    content: 'Lorem Khaled Ipsum is a major key to success. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! We don’t see them, we will never see them. Find peace, life is like a water fall, you’ve gotta flow. Wraith talk. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm.',
  },
];

describe('ACTIONS', () => {

  describe('PostList Actions', () => {

    it('should create FETCH_POSTLIST_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_POSTLIST_REQUEST,
        isLoading: true,
      };
      expect(actions.postListRequest(true)).to.deep.equal(expectedAction);
    });

    it('should create FETCH_POSTLIST_SUCCESS', () => {
      const expectedAction = {
        type: types.FETCH_POSTLIST_SUCCESS,
        data: fakeDB,
        lastFetched: new Date(),
      };
      expect(actions.postListSuccess(fakeDB)).to.deep.equal(expectedAction);
    });

    it('should create FETCH_POSTLIST_FAILURE', () => {
      const e = {
        error: 'Invalid Request',
        message: 'Something went wrong',
      };
      const expectedAction = {
        type: types.FETCH_POSTLIST_FAILURE,
        error: e,
      };
      expect(actions.postListFailure(e)).to.deep.equal(expectedAction);
    });

  });

});
