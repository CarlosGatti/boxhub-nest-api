import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormStatus } from './defined-intake-form-status.enum';
import { NestedEnumDefinedIntakeFormStatusFilter } from './nested-enum-defined-intake-form-status-filter.input';

@InputType()
export class EnumDefinedIntakeFormStatusFilter {

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    equals?: keyof typeof DefinedIntakeFormStatus;

    @Field(() => [DefinedIntakeFormStatus], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeFormStatus>;

    @Field(() => [DefinedIntakeFormStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeFormStatus>;

    @Field(() => NestedEnumDefinedIntakeFormStatusFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeFormStatusFilter;
}
