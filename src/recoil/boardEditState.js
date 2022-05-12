import { atom } from 'recoil';

const boardEditState = atom({
    key: 'boardEditState',
    default: true,
});

export default boardEditState;
