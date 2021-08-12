import { createContext, useContext, useReducer } from 'react';

const SidebarContext = createContext();

const toggleReducer = (state, action) => {
  switch (action.show) {
    case true: {
      return { show: true };
    }
    case false: {
      return { show: false };
    }
    default: {
      throw new Error(`Unhandled action: ${action.show}`);
    }
  }
};

const SidebarToggleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toggleReducer, { show: true });

  const value = { state, dispatch };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

const useSidebarToggle = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error(
      'useSidebarToggle must be used within a SidebarToggleProvider'
    );
  }
  return context;
};

export { SidebarToggleProvider, useSidebarToggle };
