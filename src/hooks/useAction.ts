import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import AC from "../store/actions/index";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AC, dispatch);
};
