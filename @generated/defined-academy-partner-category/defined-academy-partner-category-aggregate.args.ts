import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryOrderByWithRelationInput } from './defined-academy-partner-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCountAggregateInput } from './defined-academy-partner-category-count-aggregate.input';
import { DefinedAcademyPartnerCategoryAvgAggregateInput } from './defined-academy-partner-category-avg-aggregate.input';
import { DefinedAcademyPartnerCategorySumAggregateInput } from './defined-academy-partner-category-sum-aggregate.input';
import { DefinedAcademyPartnerCategoryMinAggregateInput } from './defined-academy-partner-category-min-aggregate.input';
import { DefinedAcademyPartnerCategoryMaxAggregateInput } from './defined-academy-partner-category-max-aggregate.input';

@ArgsType()
export class DefinedAcademyPartnerCategoryAggregateArgs {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => [DefinedAcademyPartnerCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerCategoryOrderByWithRelationInput>;

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyPartnerCategoryCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyPartnerCategoryCountAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyPartnerCategoryAvgAggregateInput;

    @Field(() => DefinedAcademyPartnerCategorySumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyPartnerCategorySumAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyPartnerCategoryMinAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyPartnerCategoryMaxAggregateInput;
}
