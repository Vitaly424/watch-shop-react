import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/img/empty-cart.png';
import { FC } from "react";
import {RoutePath} from "../../config/router/routerConfig";

export const CartEmpty: FC = () => (
    <div className="cart cart--empty">
        <h2>
            Корзина пустая
        </h2>
        <p>
            Вероятней всего, вы не заказывали ещё часы.
            <br />
            Для того, чтобы заказать часы, перейди на главную страницу.
        </p>
        <Link to={RoutePath.main} className="button button--black">
            <span>Вернуться назад</span>
        </Link>
    </div>
);
