import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from './defined-academy-referral-source-type.enum';
import { NestedEnumDefinedAcademyReferralSourceTypeWithAggregatesFilter } from './nested-enum-defined-academy-referral-source-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyReferralSourceTypeFilter } from './nested-enum-defined-academy-referral-source-type-filter.input';

@InputType()
export class EnumDefinedAcademyReferralSourceTypeWithAggregatesFilter {

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => [DefinedAcademyReferralSourceType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralSourceType>;

    @Field(() => [DefinedAcademyReferralSourceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralSourceType>;

    @Field(() => NestedEnumDefinedAcademyReferralSourceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralSourceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyReferralSourceTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyReferralSourceTypeFilter;

    @Field(() => NestedEnumDefinedAcademyReferralSourceTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyReferralSourceTypeFilter;
}
