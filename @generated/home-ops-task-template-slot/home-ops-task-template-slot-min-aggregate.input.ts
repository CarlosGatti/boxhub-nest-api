import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateSlotMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    templateId?: true;

    @Field(() => Boolean, {nullable:true})
    label?: true;

    @Field(() => Boolean, {nullable:true})
    windowStart?: true;

    @Field(() => Boolean, {nullable:true})
    windowEnd?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;
}
