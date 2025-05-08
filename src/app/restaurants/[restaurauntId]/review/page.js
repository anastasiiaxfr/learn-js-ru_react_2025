import { getUsers } from "@/services/get-users";
import { getReviewsByRestaurantId } from "@/services/get-review-by-restaurant-id"

import { Suspense } from "react";

const Review = async ({ params }) => {
    const { restaurauntId } = await params;

    const reviewsPromise = getReviewsByRestaurantId(restaurauntId);
    const usersPromise = getUsers();

    const [reviews, users] = await Promise.all([reviewsPromise, usersPromise]);

    const getUserName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user.name;
    };

    return (
        <Suspense fallback='loading...'>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({ id, text, rating, userId }) =>
                    <li key={id}>
                        <b>{getUserName(userId)}: &nbsp;</b>
                        {text} [<b>{rating}/5</b>]
                    </li>
                )}
            </ul>
        </Suspense>
    )

};

export default Review;