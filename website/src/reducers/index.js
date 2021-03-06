import _ from 'lodash';
import * as actions from '../actions';

const defaultResults = {paths: null};

const rootReducers = {
  results: (state = defaultResults, action) => {
    switch (action.type) {
      case actions.SET_SHORTEST_PATH_RESULTS:
        return action.results;
      case actions.SET_ERROR_MESSAGE:
      case actions.FETCHING_RESULTS:
        return defaultResults;
      default:
        return state;
    }
  },

  isFetchingResults: (state = false, action) => {
    switch (action.type) {
      case actions.FETCHING_RESULTS:
        return true;
      case actions.SET_ERROR_MESSAGE:
      case actions.SET_SHORTEST_PATH_RESULTS:
        return false;
      default:
        return state;
    }
  },

  sourcePageTitle: (state = '', action) => {
    switch (action.type) {
      case actions.ROUTER_LOCATION_CHANGED:
        return _.get(action, 'payload.query.source', state);
      case actions.SET_SOURCE_PAGE_TITLE:
        return action.sourcePageTitle;
      default:
        return state;
    }
  },

  sourcePagePlaceholderText: (state = '', action) => {
    switch (action.type) {
      case actions.SET_SOURCE_PAGE_PLACEHOLDER_TEXT:
        return action.sourcePagePlaceholderText;
      default:
        return state;
    }
  },

  targetPagePlaceholderText: (state = '', action) => {
    switch (action.type) {
      case actions.SET_TARGET_PAGE_PLACEHOLDER_TEXT:
        return action.targetPagePlaceholderText;
      default:
        return state;
    }
  },

  targetPageTitle: (state = '', action) => {
    switch (action.type) {
      case actions.ROUTER_LOCATION_CHANGED:
        return _.get(action, 'payload.query.target', state);
      case actions.SET_TARGET_PAGE_TITLE:
        return action.targetPageTitle;
      default:
        return state;
    }
  },

  errorMessage: (state = null, action) => {
    switch (action.type) {
      case actions.SET_ERROR_MESSAGE:
        return action.errorMessage;
      case actions.FETCHING_RESULTS:
      case actions.SET_SHORTEST_PATH_RESULTS:
        return null;
      default:
        return state;
    }
  },
};

export default rootReducers;
