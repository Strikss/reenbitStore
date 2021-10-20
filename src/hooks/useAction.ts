import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import AC from "../store/action-creators/index";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AC, dispatch);
};
