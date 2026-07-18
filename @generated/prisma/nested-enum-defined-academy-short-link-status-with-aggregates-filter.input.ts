import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from './defined-academy-short-link-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyShortLinkStatusFilter } from './nested-enum-defined-academy-short-link-status-filter.input';

@InputType()
export class NestedEnumDefinedAcademyShortLinkStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => [DefinedAcademyShortLinkStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyShortLinkStatus>;

    @Field(() => [DefinedAcademyShortLinkStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyShortLinkStatus>;

    @Field(() => NestedEnumDefinedAcademyShortLinkStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyShortLinkStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyShortLinkStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyShortLinkStatusFilter;

    @Field(() => NestedEnumDefinedAcademyShortLinkStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyShortLinkStatusFilter;
}
