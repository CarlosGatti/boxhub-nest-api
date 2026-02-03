import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdOrderByWithRelationInput } from './home-ops-household-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdScalarFieldEnum } from './home-ops-household-scalar-field.enum';

@ArgsType()
export class FindFirstHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => [HomeOpsHouseholdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdOrderByWithRelationInput>;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsHouseholdScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsHouseholdScalarFieldEnum>;
}
