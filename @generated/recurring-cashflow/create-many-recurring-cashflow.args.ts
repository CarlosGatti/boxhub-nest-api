import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowCreateManyInput } from './recurring-cashflow-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecurringCashflowArgs {

    @Field(() => [RecurringCashflowCreateManyInput], {nullable:false})
    @Type(() => RecurringCashflowCreateManyInput)
    data!: Array<RecurringCashflowCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
