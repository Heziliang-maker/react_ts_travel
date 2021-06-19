import {
  useSelector as useReduxSelecotr,
  TypedUseSelectorHook,
} from "react-redux";

import { RouteState } from "./store";

export const useSelector: TypedUseSelectorHook<RouteState> = useReduxSelecotr;
