import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralOrderByWithRelationInput } from './defined-academy-referral-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralCountAggregateInput } from './defined-academy-referral-count-aggregate.input';
import { DefinedAcademyReferralAvgAggregateInput } from './defined-academy-referral-avg-aggregate.input';
import { DefinedAcademyReferralSumAggregateInput } from './defined-academy-referral-sum-aggregate.input';
import { DefinedAcademyReferralMinAggregateInput } from './defined-academy-referral-min-aggregate.input';
import { DefinedAcademyReferralMaxAggregateInput } from './defined-academy-referral-max-aggregate.input';

@ArgsType()
export class DefinedAcademyReferralAggregateArgs {

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralWhereInput)
    where?: DefinedAcademyReferralWhereInput;

    @Field(() => [DefinedAcademyReferralOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyReferralOrderByWithRelationInput>;

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyReferralCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyReferralCountAggregateInput;

    @Field(() => DefinedAcademyReferralAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyReferralAvgAggregateInput;

    @Field(() => DefinedAcademyReferralSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyReferralSumAggregateInput;

    @Field(() => DefinedAcademyReferralMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyReferralMinAggregateInput;

    @Field(() => DefinedAcademyReferralMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyReferralMaxAggregateInput;
}
