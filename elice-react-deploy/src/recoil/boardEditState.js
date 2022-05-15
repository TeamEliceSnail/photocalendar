import { atom } from 'recoil';

const boardEditState = atom({
    key: 'boardEditState',
    default: false,
});

export default boardEditState;
