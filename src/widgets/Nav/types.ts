export type NavTheme = {
  background: string;
  hover: string;
};

export interface ConnectCallbackType {
  key: "metamask" | "trustwallet" | "mathwallet" | "tokenpocket" | "walletconnect";
  callback: () => null;
}

export interface NavProps {
  account?: string;
  connectCallbacks: ConnectCallbackType[];
  logout: () => null;
}
