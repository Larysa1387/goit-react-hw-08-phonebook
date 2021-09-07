import { useSelector, useDispatch } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";
import defaultAvatar from "../icons/dungeon.svg";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import IconButton from "@material-ui/core/IconButton";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <h3 className={s.name}>Hello, {name}</h3>
      <IconButton
        size="small"
        variant="outlined"
        className={s.MuiIconButton_root}
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <ExitToAppRoundedIcon />
      </IconButton>
    </div>
  );
}
