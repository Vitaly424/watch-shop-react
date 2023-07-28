import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Categories } from '@/components/Categories';
import { Sort } from '@/components/Sort';
import { WatchBlock, WatchBlockSkeleton } from '@/components/WatchBlock';
import { getFilterSelector } from '@/redux/Filter';
import { fetchWatch, getWatchSelector } from '@/redux/Watch';
import { useAppDispatch } from "@/redux/store";
import { categoriesList } from "@/consts/categories";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const { searchValue } = useSelector(getFilterSelector);
    const isSearch = useRef(false);

    const { items, status } = useSelector(getWatchSelector);
    const { categoryId, sortType } = useSelector(getFilterSelector);

    const getWatch = async () => {
        const category = Number(categoryId) > 0 ? `category=${categoryId}` : '';
        const sort = `&sortBy=${sortType.sortProperty}&order=desc`;
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchWatch({
                category,
                sort,
                search,
            }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getWatch();
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
            <h2 className="content__title">{categoriesList[categoryId]}</h2>
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
