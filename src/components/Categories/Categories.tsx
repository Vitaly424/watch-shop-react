import { useDispatch, useSelector } from 'react-redux';
import {selectFilter, setCategoryId} from '../../redux/slices/filterSlice';
import { FC } from "react";

export const categories: string[] = [
    'Все',
    'Российские часы',
    'Эксклюзивные часы',
    'Немецкие часы',
    'Японские часы',
    'Швейцарские часы',
];

export const Categories: FC = () => {
    const { categoryId } = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <div className="categories">
            <ul className="categories__list">
                {categories.map((categoryName, index) => (
                    <li
                        onClick={() => dispatch(setCategoryId(index))}
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
