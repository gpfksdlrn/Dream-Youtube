import { createContext, useContext } from "react";
import YoutubeClient from "../api/realYoutubeClient";
import Youtube from "../api/youtube";
//import DevYoutubeClient from "../api/devYoutubeClient";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const client = new YoutubeClient();
  //const client = new DevYoutubeClient();
  const youtube = new Youtube(client);

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
