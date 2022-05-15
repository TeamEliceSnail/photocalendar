import { Wrapper } from './MonthModalStyle';
import { IoClose } from 'react-icons/io5';
import { currentDateState } from '../../../recoil';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

export const MonthModal = ({ toggleDateModal, state }) => {
    const [currentDate, setCurrentDate] = useRecoilState(currentDateState);
    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);

    function changeYear(e) {
        setYear(e.target.value);
    }

    function changeMonth(e) {
        setMonth(e.target.value);
    }

    function moveToNewDate() {
        toggleDateModal();
        setCurrentDate(new Date(year, month - 1));
    }

    return (
        <Wrapper state={state}>
            <div>
                <IoClose className="icon_close" onClick={toggleDateModal} />
                <section>
                    <input
                        type="number"
                        placeholder="0000"
                        min="1970"
                        max="2050"
                        value={year}
                        onChange={changeYear}
                    />
                    <input
                        type="number"
                        placeholder="00"
                        min="1"
                        max="12"
                        value={month}
                        onChange={changeMonth}
                    />
                </section>
                <button onClick={moveToNewDate}>Click!</button>
            </div>
        </Wrapper>
    );
};
