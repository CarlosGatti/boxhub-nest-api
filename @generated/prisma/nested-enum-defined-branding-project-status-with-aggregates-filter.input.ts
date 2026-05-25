import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from './defined-branding-project-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedBrandingProjectStatusFilter } from './nested-enum-defined-branding-project-status-filter.input';

@InputType()
export class NestedEnumDefinedBrandingProjectStatusWithAggregatesFilter {

    @Field(() => DefinedBrandingProjectStatus, {nullable:true})
    equals?: keyof typeof DefinedBrandingProjectStatus;

    @Field(() => [DefinedBrandingProjectStatus], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingProjectStatus>;

    @Field(() => [DefinedBrandingProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingProjectStatus>;

    @Field(() => NestedEnumDefinedBrandingProjectStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingProjectStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedBrandingProjectStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedBrandingProjectStatusFilter;

    @Field(() => NestedEnumDefinedBrandingProjectStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedBrandingProjectStatusFilter;
}
