import { RootState } from '../../store/store';
export const selectGithup = (state: RootState) => state.githup;
export const selectFavourities = (state: RootState) => state.githup.favourities;