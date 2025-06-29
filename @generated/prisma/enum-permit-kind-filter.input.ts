import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitKind } from './permit-kind.enum';
import { NestedEnumPermitKindFilter } from './nested-enum-permit-kind-filter.input';

@InputType()
export class EnumPermitKindFilter {

    @Field(() => PermitKind, {nullable:true})
    equals?: keyof typeof PermitKind;

    @Field(() => [PermitKind], {nullable:true})
    in?: Array<keyof typeof PermitKind>;

    @Field(() => [PermitKind], {nullable:true})
    notIn?: Array<keyof typeof PermitKind>;

    @Field(() => NestedEnumPermitKindFilter, {nullable:true})
    not?: NestedEnumPermitKindFilter;
}
