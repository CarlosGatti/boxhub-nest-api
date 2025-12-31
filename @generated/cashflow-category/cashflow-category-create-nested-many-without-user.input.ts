import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutUserInput } from './cashflow-category-create-without-user.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutUserInput } from './cashflow-category-create-or-connect-without-user.input';
import { CashflowCategoryCreateManyUserInputEnvelope } from './cashflow-category-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';

@InputType()
export class CashflowCategoryCreateNestedManyWithoutUserInput {

    @Field(() => [CashflowCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutUserInput)
    create?: Array<CashflowCategoryCreateWithoutUserInput>;

    @Field(() => [CashflowCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CashflowCategoryCreateOrConnectWithoutUserInput>;

    @Field(() => CashflowCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CashflowCategoryCreateManyUserInputEnvelope)
    createMany?: CashflowCategoryCreateManyUserInputEnvelope;

    @Field(() => [CashflowCategoryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>>;
}
