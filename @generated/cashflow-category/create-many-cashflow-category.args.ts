import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryCreateManyInput } from './cashflow-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCashflowCategoryArgs {

    @Field(() => [CashflowCategoryCreateManyInput], {nullable:false})
    @Type(() => CashflowCategoryCreateManyInput)
    data!: Array<CashflowCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
