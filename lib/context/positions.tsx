"use client";
import { Dispatch, createContext, useContext, useReducer } from "react";

const PositionsContext = createContext<any[]>([]);

const PositionsDispatchContext = createContext<any>(null);

export enum POSITIONS_ACTION {
  ADDED = "added",
}

export function PositionsProvider({ children }: any) {
  const [positions, dispatch] = useReducer(positionsReducer, initialPositions);

  return (
    <PositionsContext.Provider value={positions}>
      <PositionsDispatchContext.Provider value={dispatch}>
        {children}
      </PositionsDispatchContext.Provider>
    </PositionsContext.Provider>
  );
}

export function usePositions() {
  return useContext(PositionsContext);
}

export function usePositionsDispatch() {
  return useContext(PositionsDispatchContext);
}

function positionsReducer(positions: any[], action: any) {
  switch (action.type) {
    case POSITIONS_ACTION.ADDED: {
      return [
        {
          ...action.payload,
        },
        ...positions,
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialPositions: any[] = [];
