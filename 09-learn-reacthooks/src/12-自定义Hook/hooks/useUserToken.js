import { useContext } from "react";
import { TokenContext, UserContext } from "../context";

function useUserToken() {
	const user = useContext(UserContext)
	const token = useContext(TokenContext)

	return [user, token]
}

export default useUserToken