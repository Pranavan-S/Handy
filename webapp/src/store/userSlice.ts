import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid?: string;
  isAuthenticated: boolean;
  name: string;
  avatarUrl?: string;
  userType: string; // 'consumer' | 'provider' | 'admin'
  location?: string; // Optional field for user location
  platform_tokens?: number;
}

const initialState: UserState = {
  uid: '', 
  isAuthenticated: true,
  name: 'User',
  avatarUrl: '',
  userType: '', 
  location: undefined, // Optional field for user location
  platform_tokens: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ name: string; avatarUrl?: string ,uid: string, userType: string, location?: string, platform_tokens?: number }>) {
      state.uid = action.payload.uid; 
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
      state.isAuthenticated = true;
      state.userType = action.payload.userType; 
      state.location = action.payload.location; // Optional field for user location
      state.platform_tokens = action.payload.platform_tokens; 
    },
    logout(state) {
      state.uid = '';
      state.isAuthenticated = false;
      state.name = '';
      state.avatarUrl = '';
      state.userType = ''; 
      state.location = undefined;
      state.platform_tokens = 0;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
