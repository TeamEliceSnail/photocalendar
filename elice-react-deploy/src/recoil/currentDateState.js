import { atom } from 'recoil';

const currentDateState = atom({
    key: 'currentDateState',
    default: new Date(),
});

export default currentDateState;
