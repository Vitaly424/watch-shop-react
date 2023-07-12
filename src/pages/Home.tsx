import { FC, useEffect, useRef } from 'react';
import {useSelector} from 'react-redux';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { WatchBlock, WatchBlockSkeleton } from '../components/WatchBlock';
import {selectFilter} from '../redux/slices/filterSlice';
import {fetchPizzas, selectWatchData} from '../redux/slices/watchSlice';
import { useAppDispatch } from "../redux/store";
import {categories} from "../components/Categories/Categories";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const { searchValue } = useSelector(selectFilter);
    const isSearch = useRef(false);

    const { items, status } = useSelector(selectWatchData);
    const { categoryId, sortType } = useSelector(selectFilter);

    const getPizzas = async () => {
        const category = Number(categoryId) > 0 ? `category=${categoryId}` : '';
        const sort = `&sortBy=${sortType.sortProperty}&order=desc`;
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchPizzas({
            category,
            sort,
            search,
        }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getPizzas();
        }

        isSearch.current = false;
    }, [categoryId, sortType, searchValue]);

    const watchSkeleton = [...new Array(6)].map((_, index) => (
        <WatchBlockSkeleton key={index} />
    ));

    const watch = items.map((obj: any) => (
        <WatchBlock
            key={obj.id}
            {...obj}
        />
    ));

    return (
        <>
            <div className="content__top">
                <Sort />
                <Categories />
            </div>
            <h2 className="content__title">{categories[categoryId]}</h2>
            {status === 'error' ? (
                <div>
                    <h2>
                        Произошла ошибка
                        <span>😕</span>
                    </h2>
                    <p>
                        Не удалось получить часы
                    </p>
                </div>
            ) : (
                <div className="content__items">
                    {status === 'loading' ? watchSkeleton : watch}
                </div>
            )}
        </>
    );
};

export default Home;
