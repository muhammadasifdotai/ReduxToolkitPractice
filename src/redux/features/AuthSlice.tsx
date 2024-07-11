// ya file hamrai authentication kay leyee hogi. for example: login, signUp, change password, forgot password etc. is tarah kay jitnay bhi actions hotay hay wo hum saray aik hi file may likhtay hay.

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../api';

// initialState: aik object hay q kay humay multiple keys chahiyee.
const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// login
// createAsyncThunk: aik function hay jo humay redux toolkit say mila hay.
// ... ya kya krta hay kay jo server say data ata hay, API call krwayoon ga API ka data ayee ga, is reducer ko update krwa doon ga user data kay ander, jo initialState may user data hay us ko update krwa doon ga. is saray kam ki handling createAsyncThunk krta hay.
// .. phlay parameter may ya humay aik string deta hay or dorsary may aik callback
// jaha hum is function(login) ko call krain gay, yani is case may longinScreen pr, woha jo may email or password enter kroon ga, wo mughay is callback (params, thunkApi) may mil jayee ga, 'params' may.

// API.post('auth/login', params): is kay phlay parameter may 'end point' hay, or dosaray parameter may 'data' hay , q kay login wala data param may aya tha uper.

// In Simple Words: jub bhi may is function ko call kroon ga, waha say jo data pass kroon ga wo mughay first parameter may milay ga. jo kay (params) hay.
// thunkApi: iger function ko custom values kay sath fullfilled krwana hay to us kay leyee thunkApi use krtay hay.

// jub createAsyncThunk call huva or data hamaray pass login may aya, to initialState kaisay update hogi? is kay leyee 'extraReducers' kam ata hay.
export const login = createAsyncThunk('login', async (params, thunkApi) => {
  console.log('AuthSlice~ login ~ params:', params);
  try {
    const response = await API.post('auth/login', params);
    console.log('AuthSlice~ login ~ response:', response);
    return response.data; //ya wo data hay jo backend say aya hay. jo bhi data backend say mila wo return krwa deya hay.
    // return thunkApi.fulfillWithValue('')
  } catch (error) {
    console.log('AuthSlice ~ login ~ error:', error);
    return thunkApi.rejectWithValue(error);
  }
});

// signup

// confirmSignup

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  // extraReducers: aik arrow function hay, or is kay parameter may builder milta hay.
  // builder ki property hay addCase, is kay phlay parameter may function pass krtay hay or function ki 3 states hogi (pending, fullfilled, rejected) or jis state may function hoga us kay mutabiq in 3 states may say koi aik state chalay gi
  // pending: jub API call ho rhi ho gi to pending hoga.
  // .. addCases: kay second parameter may ya hamay call back deta hay. or callback may hamay state or action milta hay.
  extraReducers: builder => {
    // login cases
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    // state.isSuccess = true: is tarah kay variables hum is leyee bnatay hay takay in variables kay behaf pay go conditions lagani hoti hay apni screens pay, us API ko use krna hay, us ka data use krna hay waha pay hum conditions lagatay hay.
    // action.payload: jo bhi hamay data backend say aya wo is action.payload may milay ga.
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    // error walay case may hum 'action' ko use krkay error message ko screen pr dekha saktay hay.
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AuthSlice.reducer;