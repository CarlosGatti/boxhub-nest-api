import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentOrderByWithRelationInput } from './defined-academy-enrollment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCountAggregateInput } from './defined-academy-enrollment-count-aggregate.input';
import { DefinedAcademyEnrollmentAvgAggregateInput } from './defined-academy-enrollment-avg-aggregate.input';
import { DefinedAcademyEnrollmentSumAggregateInput } from './defined-academy-enrollment-sum-aggregate.input';
import { DefinedAcademyEnrollmentMinAggregateInput } from './defined-academy-enrollment-min-aggregate.input';
import { DefinedAcademyEnrollmentMaxAggregateInput } from './defined-academy-enrollment-max-aggregate.input';

@ArgsType()
export class DefinedAcademyEnrollmentAggregateArgs {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => [DefinedAcademyEnrollmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyEnrollmentOrderByWithRelationInput>;

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyEnrollmentCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyEnrollmentCountAggregateInput;

    @Field(() => DefinedAcademyEnrollmentAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyEnrollmentAvgAggregateInput;

    @Field(() => DefinedAcademyEnrollmentSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyEnrollmentSumAggregateInput;

    @Field(() => DefinedAcademyEnrollmentMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyEnrollmentMinAggregateInput;

    @Field(() => DefinedAcademyEnrollmentMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyEnrollmentMaxAggregateInput;
}
