import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateManyUserInput } from './recurring-cashflow-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RecurringCashflowCreateManyUserInputEnvelope {

    @Field(() => [RecurringCashflowCreateManyUserInput], {nullable:false})
    @Type(() => RecurringCashflowCreateManyUserInput)
    data!: Array<RecurringCashflowCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
