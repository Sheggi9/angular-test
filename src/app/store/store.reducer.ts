import { Action, createReducer, on } from '@ngrx/store'
import * as AllActions from './all.actions'

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(AllActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(AllActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(AllActions.resetScore, state => ({ home: 0, away: 0 })),
  on(AllActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
