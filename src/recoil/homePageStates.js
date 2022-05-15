import { atom, selector } from 'recoil';
import { getFilteredData } from '../pages/homePage/api';

export const currentDateAtom = atom({
    key: 'currentDateAtom',
    default: new Date(),
});

export const monthDataAtom = atom({
    key: 'monthDataAtom',
    default: [],
});

export const monthDataSelector = selector({
    key: 'monthDataSelector',
    get: async ({ get }) => {
        const currentDate = get(currentDateAtom);
        const monthData = await getFilteredData(currentDate);
        return monthData;
    },
    set: ({ set }, newValue) => set(monthDataAtom, newValue),
});
