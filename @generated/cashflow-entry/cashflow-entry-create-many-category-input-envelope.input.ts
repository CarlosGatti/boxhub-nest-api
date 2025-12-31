import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateManyCategoryInput } from './cashflow-entry-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowEntryCreateManyCategoryInputEnvelope {

    @Field(() => [CashflowEntryCreateManyCategoryInput], {nullable:false})
    @Type(() => CashflowEntryCreateManyCategoryInput)
    data!: Array<CashflowEntryCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
