import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsAssignmentMode {
    FIXED = "FIXED",
    ROUND_ROBIN = "ROUND_ROBIN",
    BALANCED = "BALANCED"
}


registerEnumType(HomeOpsAssignmentMode, { name: 'HomeOpsAssignmentMode', description: undefined })
