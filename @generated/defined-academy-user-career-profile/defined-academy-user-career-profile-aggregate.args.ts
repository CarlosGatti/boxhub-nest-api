import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileOrderByWithRelationInput } from './defined-academy-user-career-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCountAggregateInput } from './defined-academy-user-career-profile-count-aggregate.input';
import { DefinedAcademyUserCareerProfileAvgAggregateInput } from './defined-academy-user-career-profile-avg-aggregate.input';
import { DefinedAcademyUserCareerProfileSumAggregateInput } from './defined-academy-user-career-profile-sum-aggregate.input';
import { DefinedAcademyUserCareerProfileMinAggregateInput } from './defined-academy-user-career-profile-min-aggregate.input';
import { DefinedAcademyUserCareerProfileMaxAggregateInput } from './defined-academy-user-career-profile-max-aggregate.input';

@ArgsType()
export class DefinedAcademyUserCareerProfileAggregateArgs {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => [DefinedAcademyUserCareerProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerProfileOrderByWithRelationInput>;

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyUserCareerProfileCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyUserCareerProfileCountAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyUserCareerProfileAvgAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyUserCareerProfileSumAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyUserCareerProfileMinAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyUserCareerProfileMaxAggregateInput;
}
