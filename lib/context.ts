import { createContext } from "react";

interface IContextValue {
  user?: object;
  username?: string;
}

export const UserContext = createContext<IContextValue>({
  user: undefined,
  username: undefined,
});
