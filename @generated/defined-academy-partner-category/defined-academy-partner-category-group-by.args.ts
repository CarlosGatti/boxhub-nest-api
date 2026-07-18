import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryOrderByWithAggregationInput } from './defined-academy-partner-category-order-by-with-aggregation.input';
import { DefinedAcademyPartnerCategoryScalarFieldEnum } from './defined-academy-partner-category-scalar-field.enum';
import { DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput } from './defined-academy-partner-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCountAggregateInput } from './defined-academy-partner-category-count-aggregate.input';
import { DefinedAcademyPartnerCategoryAvgAggregateInput } from './defined-academy-partner-category-avg-aggregate.input';
import { DefinedAcademyPartnerCategorySumAggregateInput } from './defined-academy-partner-category-sum-aggregate.input';
import { DefinedAcademyPartnerCategoryMinAggregateInput } from './defined-academy-partner-category-min-aggregate.input';
import { DefinedAcademyPartnerCategoryMaxAggregateInput } from './defined-academy-partner-category-max-aggregate.input';

@ArgsType()
export class DefinedAcademyPartnerCategoryGroupByArgs {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => [DefinedAcademyPartnerCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerCategoryOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyPartnerCategoryScalarFieldEnum>;

    @Field(() => DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput;

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
