import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from './defined-academy-content-status.enum';
import { NestedEnumDefinedAcademyContentStatusWithAggregatesFilter } from './nested-enum-defined-academy-content-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyContentStatusFilter } from './nested-enum-defined-academy-content-status-filter.input';

@InputType()
export class EnumDefinedAcademyContentStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyContentStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyContentStatus;

    @Field(() => [DefinedAcademyContentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyContentStatus>;

    @Field(() => [DefinedAcademyContentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyContentStatus>;

    @Field(() => NestedEnumDefinedAcademyContentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyContentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyContentStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyContentStatusFilter;

    @Field(() => NestedEnumDefinedAcademyContentStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyContentStatusFilter;
}
