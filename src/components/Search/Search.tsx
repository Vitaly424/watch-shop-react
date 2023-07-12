import { AiFillCloseCircle } from 'react-icons/ai';
import {
    ChangeEvent,
    useCallback, useRef, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';
import styles from './Search.module.scss';
import { selectFilter, setSearchValue } from '../../redux/slices/filterSlice';
import {useAppDispatch} from "../../redux/store";

export const Search = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const { searchValue } = useSelector(selectFilter);

    const inputRef = useRef<HTMLInputElement>(null);

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 300),
        [],
    );

    const onClearInput = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.searchBlock}>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.searchBlock__input}
                placeholder="Поиск часов.."
                type="text"
            />

            {searchValue && (
                <button className={styles.searchBlock__btn} type="button" onClick={onClearInput}>
                    <AiFillCloseCircle className={styles.searchBlock__icon} />
                </button>
            )}
        </div>
    );
};
