import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartAction, ICart, getCartByIdSelector } from '@/redux/Cart';
import { useAppDispatch } from "@/redux/store";
import style from './ProductCard.module.scss';
import { GrCart } from "react-icons/gr";
import { formatterRub } from "@/utils/numberFormatter";
import { RoutePath } from "@/config/router/routerConfig";

interface PizzaBlockProps {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    types: number[];
    sizes: number[];
    rating?: number;
}

export const WatchBlock: FC<PizzaBlockProps> = ({
    id, price, title, imageUrl,
}) => {
    const dispatch = useAppDispatch();
    const cartItem = useSelector(getCartByIdSelector(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: ICart = {
            id,
            price,
            title,
            imageUrl,
            count: 0
        };

        dispatch(cartAction.addItem(item));
    };

    return (
        <div className={style.productCard}>
            <div className={style.productCard__image}>
                <Link to={`${RoutePath.full_watch}${id}`} className={style.productCard__more}>Подробнее</Link>
                <img src={imageUrl} alt="Часы"/>
            </div>
            <div className={style.productCard__content}>
                <h3 className={style.productCard__title}>{title}</h3>
                <div className={style.productCard__footer}>
                    <span className={style.productCard__price}>Цена: {formatterRub(price)}</span>
                    <button onClick={onClickAdd}  className={style.productCard__addcard}><span>Добавить</span>  <GrCart /> {addedCount > 0 && <i>+{addedCount}</i>}</button>
                </div>
            </div>
        </div>
    );
};
