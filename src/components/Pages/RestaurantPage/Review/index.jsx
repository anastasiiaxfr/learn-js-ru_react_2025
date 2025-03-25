import React from 'react';

function ReviewRestaurant({reviews}) {
	return (
		<ul className="">
			{reviews.map(({id, text}) => (
				<li key={id}>{text}</li>
			))}
		</ul>
	);
}

export default ReviewRestaurant;
