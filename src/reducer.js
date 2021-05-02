export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  HIP_HOP: null,
  //remove after developing to null
  token: null,
  // token:
  //   'BQACz0dzEYiLg29xuk5R3PsJNWHPVGPvu1e6Bhw5oqi-s2uH30sPLxqEHogfZUoR4r4aYLH3sEg9oRCzmKeA-KAdQtOceK2Ww44xbsRw0qkdbYXbe7X4cR2f2XtLdLoGOm_Wc6nxlG902Nbp9acE7Ni5uLM9vUwvR3BGMTbr9nhZ0-T6SGYT',
};

//here action is - set the user, set the playlists, set the playing, set the items etc.
//switch is use to perform action / dispatch action according to action type

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  //for SET_USER action type=SET_USER, and payload=action.user

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_HIP_HOP':
      return {
        ...state,
        HIP_HOP: action.HIP_HOP,
      };

    default:
      return state;
  }
};

export default reducer;
