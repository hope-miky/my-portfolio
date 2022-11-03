

import React, { SetStateAction } from 'react'

interface IAppContext {
    view: string;
    setCountry?: React.Dispatch<SetStateAction<string>>;
  }

  
const ContryContext = React.createContext<IAppContext>({
    view: "home",
    setCountry: ()=> {},
})
export const ContryProvider = ContryContext.Provider
export default ContryContext