import React, {useEffect, useState, useContext} from 'react';
import data from './data.json'

const AppContext = React.createContext()

// Filter and display short teams name
const allTeams = [...new Set(data.map((item) => item.short))]

const AppProvider = ({children}) =>{
    const [teams, setTeams] = useState(allTeams)

    return <AppContext.Provider value={{
        teams
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}