import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryCreateManyInput } from './cashflow-entry-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCashflowEntryArgs {

    @Field(() => [CashflowEntryCreateManyInput], {nullable:false})
    @Type(() => CashflowEntryCreateManyInput)
    data!: Array<CashflowEntryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
