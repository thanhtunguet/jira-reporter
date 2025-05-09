import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Field, Model, ObjectField} from 'react3l';
import {User} from 'src/models';
import {LicenseStatus} from 'src/types/LicenseStatus';

export class UserState extends Model {
  @ObjectField(User)
  user?: User | null;

  @Field(Boolean)
  isLoading?: boolean;

  @Field(Number)
  licenseStatus?: LicenseStatus;
}

const initialState: UserState = {
  user: null,
  isLoading: true,
  licenseStatus: LicenseStatus.UNLICENSED,
};

export const userSlice = createSlice({
  name: 'jira',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setLicenseStatus(state, action: PayloadAction<LicenseStatus>) {
      state.licenseStatus = action.payload;
    },
  },
});
