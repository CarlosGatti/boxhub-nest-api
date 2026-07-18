import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCountAggregate } from './defined-academy-partner-category-count-aggregate.output';
import { DefinedAcademyPartnerCategoryAvgAggregate } from './defined-academy-partner-category-avg-aggregate.output';
import { DefinedAcademyPartnerCategorySumAggregate } from './defined-academy-partner-category-sum-aggregate.output';
import { DefinedAcademyPartnerCategoryMinAggregate } from './defined-academy-partner-category-min-aggregate.output';
import { DefinedAcademyPartnerCategoryMaxAggregate } from './defined-academy-partner-category-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyPartnerCategory {

    @Field(() => DefinedAcademyPartnerCategoryCountAggregate, {nullable:true})
    _count?: DefinedAcademyPartnerCategoryCountAggregate;

    @Field(() => DefinedAcademyPartnerCategoryAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyPartnerCategoryAvgAggregate;

    @Field(() => DefinedAcademyPartnerCategorySumAggregate, {nullable:true})
    _sum?: DefinedAcademyPartnerCategorySumAggregate;

    @Field(() => DefinedAcademyPartnerCategoryMinAggregate, {nullable:true})
    _min?: DefinedAcademyPartnerCategoryMinAggregate;

    @Field(() => DefinedAcademyPartnerCategoryMaxAggregate, {nullable:true})
    _max?: DefinedAcademyPartnerCategoryMaxAggregate;
}
