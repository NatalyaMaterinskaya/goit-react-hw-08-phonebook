import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { useAuth } from "hooks/useAuth";
import { Btn, Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <Wrapper>
     {user && <p>{user.email}</p>}
      <Btn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Btn>
    </Wrapper>
  );
};
