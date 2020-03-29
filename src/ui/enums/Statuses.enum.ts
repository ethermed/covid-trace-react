export enum Statuses {
  HEALTHY = "healthy",
  AT_RISK = "at-risk",
  BEING_TESTED = "being-tested",
  INFECTED = "infected",
}

export const StatusColorKeyMap: { [key: string]: string } = {
  healthy: "#239F57",
  infected: "#EE0601",
  "at-risk": "#FFA101",
  tested: "#3D91D8",
};
