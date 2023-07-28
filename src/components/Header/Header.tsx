import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '@/assets/img/logo.jpg';
import { Search } from '../Search';
import { getCartSelector } from '@/redux/Cart';
import { useEffect, useRef } from "react";
import { GrCart } from "react-icons/gr";
import { formatterRub } from "@/utils/numberFormatter";
import { RoutePath } from "@/config/router/routerConfig";

export const Header = () => {
    const { items, totalPrice } = useSelector(getCartSelector);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
    const location = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json)
        }

        isMounted.current = true;
    }, [items, totalPrice]);

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to={RoutePath.main} className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1 className="header__title">Наручные часы</h1>
                            <p>Самые лучшие часы</p>
                        </div>
                    </Link>
                    <div className="header__cart">
                        {location.pathname !== '/cart' && (
                            <Link to={RoutePath.cart} type="button" className="button button--cart">
                                <span>
                                    {formatterRub(totalPrice)}
                                </span>
                                <div className="button__delimiter" />
                                <GrCart className="button--icon"/>
                                <span>{totalCount}</span>
                            </Link>
                        ) }
                    </div>
                </div>
                {location.pathname === '/' && <Search />}
            </div>
        </div>
    );
};
