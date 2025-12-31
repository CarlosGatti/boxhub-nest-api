import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutEntriesInput } from './cashflow-category-create-without-entries.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutEntriesInput } from './cashflow-category-create-or-connect-without-entries.input';
import { CashflowCategoryUpsertWithoutEntriesInput } from './cashflow-category-upsert-without-entries.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { CashflowCategoryUpdateToOneWithWhereWithoutEntriesInput } from './cashflow-category-update-to-one-with-where-without-entries.input';

@InputType()
export class CashflowCategoryUpdateOneRequiredWithoutEntriesNestedInput {

    @Field(() => CashflowCategoryCreateWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutEntriesInput)
    create?: CashflowCategoryCreateWithoutEntriesInput;

    @Field(() => CashflowCategoryCreateOrConnectWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutEntriesInput)
    connectOrCreate?: CashflowCategoryCreateOrConnectWithoutEntriesInput;

    @Field(() => CashflowCategoryUpsertWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryUpsertWithoutEntriesInput)
    upsert?: CashflowCategoryUpsertWithoutEntriesInput;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => CashflowCategoryUpdateToOneWithWhereWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryUpdateToOneWithWhereWithoutEntriesInput)
    update?: CashflowCategoryUpdateToOneWithWhereWithoutEntriesInput;
}
