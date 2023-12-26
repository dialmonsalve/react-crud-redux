import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peter@doe.com",
		github: "peter",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "lena@lena.com",
		github: "lena",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "phil@phil",
		github: "phil",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");

	if (persistedState) return JSON.parse(persistedState).users;

	return DEFAULT_STATE;
})();

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser:(state, action: PayloadAction<User>)=>{
			const id =crypto.randomUUID()
			state.push({id, ...action.payload})
			// return [...state, {id, ...action.payload}]
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser } = usersSlice.actions;
