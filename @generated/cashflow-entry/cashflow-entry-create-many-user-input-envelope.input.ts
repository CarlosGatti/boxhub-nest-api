import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateManyUserInput } from './cashflow-entry-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowEntryCreateManyUserInputEnvelope {

    @Field(() => [CashflowEntryCreateManyUserInput], {nullable:false})
    @Type(() => CashflowEntryCreateManyUserInput)
    data!: Array<CashflowEntryCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
