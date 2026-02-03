import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsTaskTemplateSlotScalarFieldEnum {
    id = "id",
    templateId = "templateId",
    label = "label",
    windowStart = "windowStart",
    windowEnd = "windowEnd",
    order = "order"
}


registerEnumType(HomeOpsTaskTemplateSlotScalarFieldEnum, { name: 'HomeOpsTaskTemplateSlotScalarFieldEnum', description: undefined })
