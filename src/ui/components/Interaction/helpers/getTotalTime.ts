import { AtRiskDetails } from "../../../types/AtRiskDetails";

export const getTotalTime = (interactions: AtRiskDetails[]) => {
  let timeInMs = 0;

  interactions.forEach((interaction) => {
    const { endtime, starttime } = interaction;
    const time = (+endtime - +starttime) * 1000;

    timeInMs += time;
  });

  return Math.floor(timeInMs / 60);
};
