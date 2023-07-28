import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction, SortProperty, getFilterSelector, ISort } from '@/redux/Filter';
import { sortList } from "@/consts/sortList";

export const Sort = () => {
    const dispatch = useDispatch();
    const { sortType } = useSelector(getFilterSelector);
    const sortRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);

    const onClickListItem = (obj: ISort) => {
        dispatch(filterAction.setSortType(obj));
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(`.${sortRef.current?.className}`)) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>
                    {sortType.name}
                </span>
            </div>

            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, index) => (
                            <li
                                key={obj.name}
                                onClick={() => onClickListItem(obj)}
                                className={sortType.sortProperty === obj.sortProperty ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
