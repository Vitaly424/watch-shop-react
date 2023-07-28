import { useDispatch, useSelector } from 'react-redux';
import { getFilterSelector, filterAction } from '@/redux/Filter';
import { FC } from "react";
import { categoriesList } from "@/consts/categories";

export const Categories: FC = () => {
    const { categoryId } = useSelector(getFilterSelector);
    const dispatch = useDispatch();

    return (
        <div className="categories">
            <ul className="categories__list">
                {categoriesList.map((categoryName, index) => (
                    <li
                        onClick={() => dispatch(filterAction.setCategoryId({ id: index }))}
                        className={Number(categoryId) === index ? 'active' : ''}
                        key={categoryName}
                    >
                        { categoryName }
                    </li>
                ))}
            </ul>
        </div>
    );
};
