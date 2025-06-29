import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitKind } from './permit-kind.enum';

@InputType()
export class NestedEnumPermitKindFilter {

    @Field(() => PermitKind, {nullable:true})
    equals?: keyof typeof PermitKind;

    @Field(() => [PermitKind], {nullable:true})
    in?: Array<keyof typeof PermitKind>;

    @Field(() => [PermitKind], {nullable:true})
    notIn?: Array<keyof typeof PermitKind>;

    @Field(() => NestedEnumPermitKindFilter, {nullable:true})
    not?: NestedEnumPermitKindFilter;
}
