import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { Btn } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  return (
    <div>
      {/* <p>{user.email}</p> */}
      <Btn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Btn>
    </div>
  );
};
