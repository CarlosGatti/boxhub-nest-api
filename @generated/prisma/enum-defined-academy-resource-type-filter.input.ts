import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from './defined-academy-resource-type.enum';
import { NestedEnumDefinedAcademyResourceTypeFilter } from './nested-enum-defined-academy-resource-type-filter.input';

@InputType()
export class EnumDefinedAcademyResourceTypeFilter {

    @Field(() => DefinedAcademyResourceType, {nullable:true})
    equals?: keyof typeof DefinedAcademyResourceType;

    @Field(() => [DefinedAcademyResourceType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyResourceType>;

    @Field(() => [DefinedAcademyResourceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyResourceType>;

    @Field(() => NestedEnumDefinedAcademyResourceTypeFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyResourceTypeFilter;
}
