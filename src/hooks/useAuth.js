import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/authSelectors";

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    
    return {user, isLoggedIn, isRefreshing}
}