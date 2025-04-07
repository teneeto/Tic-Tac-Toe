export enum PlayerSymbol {
  X = 'X',
  O = 'O',
}
export enum GameMode {
  Single = 'single',
  Multi = 'multi',
}

export enum GameResult {
  Win = 'win',
  Lose = 'lose',
  Tie = 'tie',
}

export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export type Player = PlayerSymbol.X | PlayerSymbol.O;

export type Mode = GameMode.Single | GameMode.Multi;

export type Result = GameResult.Win | GameResult.Lose | GameResult.Tie;

export type Difficulty = DifficultyLevel.Easy | DifficultyLevel.Medium | DifficultyLevel.Hard;
