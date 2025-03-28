import ReviewList from './ReviewList';

function ReviewRestaurant({reviews}) {
	return (
		<ul className="">
			{reviews.map((id) => (
				<ReviewList id={id} key={id} />
			))}
		</ul>
	);
}

export default ReviewRestaurant;
