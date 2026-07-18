import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from './defined-academy-partner-status.enum';
import { NestedEnumDefinedAcademyPartnerStatusWithAggregatesFilter } from './nested-enum-defined-academy-partner-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyPartnerStatusFilter } from './nested-enum-defined-academy-partner-status-filter.input';

@InputType()
export class EnumDefinedAcademyPartnerStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyPartnerStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => [DefinedAcademyPartnerStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyPartnerStatus>;

    @Field(() => [DefinedAcademyPartnerStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyPartnerStatus>;

    @Field(() => NestedEnumDefinedAcademyPartnerStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyPartnerStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyPartnerStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyPartnerStatusFilter;

    @Field(() => NestedEnumDefinedAcademyPartnerStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyPartnerStatusFilter;
}
