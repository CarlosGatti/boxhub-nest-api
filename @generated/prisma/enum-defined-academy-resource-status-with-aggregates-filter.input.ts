import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceStatus } from './defined-academy-resource-status.enum';
import { NestedEnumDefinedAcademyResourceStatusWithAggregatesFilter } from './nested-enum-defined-academy-resource-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyResourceStatusFilter } from './nested-enum-defined-academy-resource-status-filter.input';

@InputType()
export class EnumDefinedAcademyResourceStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyResourceStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => NestedEnumDefinedAcademyResourceStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyResourceStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyResourceStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyResourceStatusFilter;

    @Field(() => NestedEnumDefinedAcademyResourceStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyResourceStatusFilter;
}
