import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectStatus } from './defined-project-status.enum';
import { NestedEnumDefinedProjectStatusWithAggregatesFilter } from './nested-enum-defined-project-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedProjectStatusFilter } from './nested-enum-defined-project-status-filter.input';

@InputType()
export class EnumDefinedProjectStatusWithAggregatesFilter {

    @Field(() => DefinedProjectStatus, {nullable:true})
    equals?: keyof typeof DefinedProjectStatus;

    @Field(() => [DefinedProjectStatus], {nullable:true})
    in?: Array<keyof typeof DefinedProjectStatus>;

    @Field(() => [DefinedProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedProjectStatus>;

    @Field(() => NestedEnumDefinedProjectStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedProjectStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedProjectStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedProjectStatusFilter;

    @Field(() => NestedEnumDefinedProjectStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedProjectStatusFilter;
}
