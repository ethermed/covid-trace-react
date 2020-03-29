import { IStatusDatum } from "../ui/types/status.interface";

export const SampleAtRiskData: IStatusDatum[] = [
    {
        status: 'Healthy',
        count: 1000,
    },
    {
        status: 'Infected',
        count: 1000,
    },
    {
        status: 'At-Risk',
        count: 850,
    },
    {
        status: 'Tested',
        count: 300,
    }
]