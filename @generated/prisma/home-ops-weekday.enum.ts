import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsWeekday {
    MON = "MON",
    TUE = "TUE",
    WED = "WED",
    THU = "THU",
    FRI = "FRI",
    SAT = "SAT",
    SUN = "SUN"
}


registerEnumType(HomeOpsWeekday, { name: 'HomeOpsWeekday', description: undefined })
