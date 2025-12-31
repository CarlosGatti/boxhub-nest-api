import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateManyUserInput } from './cashflow-category-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowCategoryCreateManyUserInputEnvelope {

    @Field(() => [CashflowCategoryCreateManyUserInput], {nullable:false})
    @Type(() => CashflowCategoryCreateManyUserInput)
    data!: Array<CashflowCategoryCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
