import { type UserId, deleteUserById, User, addNewUser } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUsersActions = () => {
	const dispatch = useAppDispatch();

	const addUser = ( user: User ) => {
    dispatch(addNewUser(user))
  };

	const removeUser = ({ id }: { id: UserId }) => {
		dispatch(deleteUserById(id));
	};

	return {
		removeUser,
    addUser
	};
};
