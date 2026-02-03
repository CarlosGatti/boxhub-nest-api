import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberOrderByWithRelationInput } from './home-ops-household-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberScalarFieldEnum } from './home-ops-household-member-scalar-field.enum';

@ArgsType()
export class FindManyHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereInput)
    where?: HomeOpsHouseholdMemberWhereInput;

    @Field(() => [HomeOpsHouseholdMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdMemberOrderByWithRelationInput>;

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsHouseholdMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsHouseholdMemberScalarFieldEnum>;
}
