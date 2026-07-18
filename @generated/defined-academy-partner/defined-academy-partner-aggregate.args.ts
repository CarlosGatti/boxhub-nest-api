import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerOrderByWithRelationInput } from './defined-academy-partner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCountAggregateInput } from './defined-academy-partner-count-aggregate.input';
import { DefinedAcademyPartnerAvgAggregateInput } from './defined-academy-partner-avg-aggregate.input';
import { DefinedAcademyPartnerSumAggregateInput } from './defined-academy-partner-sum-aggregate.input';
import { DefinedAcademyPartnerMinAggregateInput } from './defined-academy-partner-min-aggregate.input';
import { DefinedAcademyPartnerMaxAggregateInput } from './defined-academy-partner-max-aggregate.input';

@ArgsType()
export class DefinedAcademyPartnerAggregateArgs {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => [DefinedAcademyPartnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerOrderByWithRelationInput>;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyPartnerCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyPartnerCountAggregateInput;

    @Field(() => DefinedAcademyPartnerAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyPartnerAvgAggregateInput;

    @Field(() => DefinedAcademyPartnerSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyPartnerSumAggregateInput;

    @Field(() => DefinedAcademyPartnerMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyPartnerMinAggregateInput;

    @Field(() => DefinedAcademyPartnerMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyPartnerMaxAggregateInput;
}
