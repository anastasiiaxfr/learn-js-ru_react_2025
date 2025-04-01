import ReviewListItem from './ReviewListItem';

function ReviewRestaurant({reviews}) {
	return (
		<ul>
			{reviews.map((id) => (
				<ReviewListItem id={id} key={id} />
			))}
		</ul>
	);
}

export default ReviewRestaurant;
