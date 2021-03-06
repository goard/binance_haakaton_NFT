import types from "../constants";

const initialState = {
  publicKey: null,
  auth: null,
  bucket: null,
  doesBucketExist: false,
  paths: null,
  memesTokenList: null,
  totalMemes: null,
  title: "",
  backdrop: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.SETUP_IDENTITY:
      return { ...state, publicKey: action.payload };
    case types.LOGIN:
      return { ...state, auth: action.payload };
    case types.CREATE_BUCKET:
      return { ...state, bucket: action.payload };
    case types.DOES_BUCKET_EXIST:
      return { ...state, doesBucketExist: action.payload };
    case types.LIST_BUCKET_PATH:
      return { ...state, paths: action.payload };
    case types.GET_MEME_TOKEN_LIST:
      return {
        ...state,
        memesTokenList: action.payload.memesTokenList,
        totalMemes: action.payload.totalMemes,
      };
    case types.TITLE_CREATE_BUCKET:
      return { ...state, title: action.payload };
    case types.OPEN_BACKDROP:
      return { ...state, backdrop: action.payload };
    default:
      return state;
  }
};

export default app;
