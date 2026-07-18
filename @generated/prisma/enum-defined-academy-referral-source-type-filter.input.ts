import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from './defined-academy-referral-source-type.enum';
import { NestedEnumDefinedAcademyReferralSourceTypeFilter } from './nested-enum-defined-academy-referral-source-type-filter.input';

@InputType()
export class EnumDefinedAcademyReferralSourceTypeFilter {

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => [DefinedAcademyReferralSourceType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralSourceType>;

    @Field(() => [DefinedAcademyReferralSourceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralSourceType>;

    @Field(() => NestedEnumDefinedAcademyReferralSourceTypeFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralSourceTypeFilter;
}
