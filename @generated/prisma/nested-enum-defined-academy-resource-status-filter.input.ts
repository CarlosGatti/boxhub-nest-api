import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceStatus } from './defined-academy-resource-status.enum';

@InputType()
export class NestedEnumDefinedAcademyResourceStatusFilter {

    @Field(() => DefinedAcademyResourceStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => [DefinedAcademyResourceStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyResourceStatus>;

    @Field(() => NestedEnumDefinedAcademyResourceStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyResourceStatusFilter;
}
