import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutUserInput } from './cashflow-category-create-without-user.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutUserInput } from './cashflow-category-create-or-connect-without-user.input';
import { CashflowCategoryUpsertWithWhereUniqueWithoutUserInput } from './cashflow-category-upsert-with-where-unique-without-user.input';
import { CashflowCategoryCreateManyUserInputEnvelope } from './cashflow-category-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { CashflowCategoryUpdateWithWhereUniqueWithoutUserInput } from './cashflow-category-update-with-where-unique-without-user.input';
import { CashflowCategoryUpdateManyWithWhereWithoutUserInput } from './cashflow-category-update-many-with-where-without-user.input';
import { CashflowCategoryScalarWhereInput } from './cashflow-category-scalar-where.input';

@InputType()
export class CashflowCategoryUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CashflowCategoryCreateWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutUserInput)
    create?: Array<CashflowCategoryCreateWithoutUserInput>;

    @Field(() => [CashflowCategoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CashflowCategoryCreateOrConnectWithoutUserInput>;

    @Field(() => [CashflowCategoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CashflowCategoryUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CashflowCategoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CashflowCategoryCreateManyUserInputEnvelope)
    createMany?: CashflowCategoryCreateManyUserInputEnvelope;

    @Field(() => [CashflowCategoryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>>;

    @Field(() => [CashflowCategoryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>>;

    @Field(() => [CashflowCategoryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>>;

    @Field(() => [CashflowCategoryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>>;

    @Field(() => [CashflowCategoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CashflowCategoryUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CashflowCategoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CashflowCategoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CashflowCategoryUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CashflowCategoryScalarWhereInput], {nullable:true})
    @Type(() => CashflowCategoryScalarWhereInput)
    deleteMany?: Array<CashflowCategoryScalarWhereInput>;
}
