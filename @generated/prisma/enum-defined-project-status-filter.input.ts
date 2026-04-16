import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectStatus } from './defined-project-status.enum';
import { NestedEnumDefinedProjectStatusFilter } from './nested-enum-defined-project-status-filter.input';

@InputType()
export class EnumDefinedProjectStatusFilter {

    @Field(() => DefinedProjectStatus, {nullable:true})
    equals?: keyof typeof DefinedProjectStatus;

    @Field(() => [DefinedProjectStatus], {nullable:true})
    in?: Array<keyof typeof DefinedProjectStatus>;

    @Field(() => [DefinedProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedProjectStatus>;

    @Field(() => NestedEnumDefinedProjectStatusFilter, {nullable:true})
    not?: NestedEnumDefinedProjectStatusFilter;
}
