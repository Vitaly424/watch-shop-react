import { useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { formatterRub } from "@/utils/numberFormatter";
import { Loader } from "@/components/Loader";

interface FullWatchState {
    title: string;
    imageUrl: string;
    price: number;
    description: string;
}

const FullWatch: FC = () => {
    const [watch, setWatch] = useState<FullWatchState>();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchWatch = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`);
            setWatch(data);
        } catch (err) {
            alert('Произошла ошибка при получении часов!');
            navigate('/');
        }
    };

    useEffect(() => {
        fetchWatch();
    }, []);

    if (!watch) {
        return (
            <Loader />
        );
    }

    return (
        <div className="container">
            <div className="full-watch">
                <div className="full-watch__image">
                    <img src={watch.imageUrl} alt={watch.title} />
                </div>
                <div className="full-watch__content">
                    <h1 className="full-watch__title">{watch.title}</h1>
                    <p className="full-watch__price">
                        Стоимость:  {formatterRub(watch.price)}
                    </p>
                    <div className="full-watch__desc">
                        <h3>Описание</h3>
                        <p>
                            {watch.description}
                        </p>
                    </div>

                    <button onClick={() => navigate('/')} className="full-watch__prev">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 13L1 6.93015L6.86175 1"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span>Вернуться назад</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullWatch;
