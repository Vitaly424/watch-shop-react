import { useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setSortType, SortProperty } from '../../redux/slices/filterSlice';

interface SortItem  {
    name: string,
    sortProperty: SortProperty;
}

export const sortList: SortItem[] = [
    { name: 'популярности', sortProperty: SortProperty.RATING },
    { name: 'цене', sortProperty: SortProperty.PRICE },
    { name: 'алфавиту', sortProperty: SortProperty.TITLE },
];

export const Sort = () => {
    const dispatch = useDispatch();
    const { sortType } = useSelector(selectFilter);
    const sortRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);

    const onClickListItem = (obj: SortItem) => {
        dispatch(setSortType(obj));
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
