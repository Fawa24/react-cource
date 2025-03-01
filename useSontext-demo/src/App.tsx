import { createContext, useState } from "react";
import { CustomNav } from "./CustomNav";

export interface NavContextType {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType>({
  signedIn: false,
  setSignedIn: () => {},
});

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  
  return <NavContext.Provider value={{signedIn, setSignedIn}}>
    <CustomNav />
    <h1>{signedIn ? 'Signed in' : 'Signed out'}</h1>
  </NavContext.Provider>
}

export default App;
