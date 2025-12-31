import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateManyCategoryInput } from './recurring-cashflow-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class RecurringCashflowCreateManyCategoryInputEnvelope {

    @Field(() => [RecurringCashflowCreateManyCategoryInput], {nullable:false})
    @Type(() => RecurringCashflowCreateManyCategoryInput)
    data!: Array<RecurringCashflowCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
