import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormType } from './defined-intake-form-type.enum';
import { NestedEnumDefinedIntakeFormTypeFilter } from './nested-enum-defined-intake-form-type-filter.input';

@InputType()
export class EnumDefinedIntakeFormTypeFilter {

    @Field(() => DefinedIntakeFormType, {nullable:true})
    equals?: keyof typeof DefinedIntakeFormType;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => NestedEnumDefinedIntakeFormTypeFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeFormTypeFilter;
}
