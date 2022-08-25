import { bindActionCreators } from 'redux';
import { addFavourites, removeFavorities } from '../features/githup/githup-slice';
import { useAppDispatch } from '../hooks/hooks';

const actions = {
    addFavourites , 
    removeFavorities
}

export const AppActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions , dispatch)
}