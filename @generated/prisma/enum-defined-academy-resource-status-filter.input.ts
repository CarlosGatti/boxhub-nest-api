import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceStatus } from './defined-academy-resource-status.enum';
import { NestedEnumDefinedAcademyResourceStatusFilter } from './nested-enum-defined-academy-resource-status-filter.input';

@InputType()
export class EnumDefinedAcademyResourceStatusFilter {

    @Field(() => DefinedAcademyResourceStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => NestedEnumDefinedAcademyResourceStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyResourceStatusFilter;
}
