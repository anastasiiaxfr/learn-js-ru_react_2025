import React from 'react';
import Dish from '../Dish';
import Review from '../Review';
import s from './styles.module.sass';

function Card({data}) {
	const {name, menu, reviews} = data;
	return (
		<article className={s.card}>
			<h2 className={s.card_title}>{name}</h2>

			{menu.length > 0 && (
				<>
					<h3>Меню</h3>
					<Dish menu={menu} />
				</>
			)}

			{reviews.length > 0 && (
				<>
					<h3>Отзывы</h3>
					<Review reviews={reviews} />
				</>
			)}
		</article>
	);
}

export default Card;
