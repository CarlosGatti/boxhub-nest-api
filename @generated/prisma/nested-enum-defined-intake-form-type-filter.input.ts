import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormType } from './defined-intake-form-type.enum';

@InputType()
export class NestedEnumDefinedIntakeFormTypeFilter {

    @Field(() => DefinedIntakeFormType, {nullable:true})
    equals?: keyof typeof DefinedIntakeFormType;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => NestedEnumDefinedIntakeFormTypeFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeFormTypeFilter;
}
