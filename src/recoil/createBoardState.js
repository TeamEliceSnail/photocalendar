import { atom } from 'recoil';

const createBoardState = atom({
    key: 'createBoardState',
    default: false,
});

export default createBoardState;
