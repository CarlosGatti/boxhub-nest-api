import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from './defined-branding-project-status.enum';
import { NestedEnumDefinedBrandingProjectStatusFilter } from './nested-enum-defined-branding-project-status-filter.input';

@InputType()
export class EnumDefinedBrandingProjectStatusFilter {

    @Field(() => DefinedBrandingProjectStatus, {nullable:true})
    equals?: keyof typeof DefinedBrandingProjectStatus;

    @Field(() => [DefinedBrandingProjectStatus], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingProjectStatus>;

    @Field(() => [DefinedBrandingProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingProjectStatus>;

    @Field(() => NestedEnumDefinedBrandingProjectStatusFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingProjectStatusFilter;
}
