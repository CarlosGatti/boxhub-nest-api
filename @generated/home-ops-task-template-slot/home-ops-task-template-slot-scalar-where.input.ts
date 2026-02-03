import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class HomeOpsTaskTemplateSlotScalarWhereInput {

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsTaskTemplateSlotScalarWhereInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsTaskTemplateSlotScalarWhereInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsTaskTemplateSlotScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    templateId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    windowStart?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    windowEnd?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
