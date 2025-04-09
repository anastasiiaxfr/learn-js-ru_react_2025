import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api'}),
	tagTypes: ['base'],
	endpoints: builder => ({
		getRestaurants: builder.query({
			query: () => '/restaurants'
		}),
		getRestaurantById: builder.query({
			query: restaurantId => `/restaurant/${restaurantId}`,
			providesTags: [{type: 'base', id: 'all'}]
		}),
		getDishesByRestaurantId: builder.query({
			query: restaurantId => `/dishes?restaurantId=${restaurantId}`,
			providesTags: [{type: 'base', id: 'all'}]
		}),
		getDishByDishId: builder.query({
			query: dishId => `/dish/${dishId}`,
			providesTags: [{type: 'base', id: 'all'}]
		}),
		getUsers: builder.query({
			query: () => `/users`
		}),
		getReviewsByRestaurantId: builder.query({
			query: restaurantId => `/reviews/?restaurantId=${restaurantId}`,
			providesTags: [{type: 'base', id: 'all'}]
		}),
		addReview: builder.mutation({
			query: ({restaurantId, review}) => ({
				url: `/review/${restaurantId}`,
				body: review,
				method: 'POST'
			}),
			invalidatesTags: [{type: 'base', id: 'all'}]
		})
	})
});

export const {
	useGetRestaurantsQuery,
	useGetRestaurantByIdQuery,
	useLazyGetRestaurantsQuery,
	useGetDishesByRestaurantIdQuery,
	useGetDishByDishIdQuery,
	useGetUsersQuery,
	useGetReviewsByRestaurantIdQuery,
	useAddReviewMutation
} = api;
