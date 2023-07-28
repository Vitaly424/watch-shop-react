import { RootState } from "@/redux/store";

export const getWatchSelector = (state: RootState) => state.watch;
