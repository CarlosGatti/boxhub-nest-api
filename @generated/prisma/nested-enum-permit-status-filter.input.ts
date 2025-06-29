import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitStatus } from './permit-status.enum';

@InputType()
export class NestedEnumPermitStatusFilter {

    @Field(() => PermitStatus, {nullable:true})
    equals?: keyof typeof PermitStatus;

    @Field(() => [PermitStatus], {nullable:true})
    in?: Array<keyof typeof PermitStatus>;

    @Field(() => [PermitStatus], {nullable:true})
    notIn?: Array<keyof typeof PermitStatus>;

    @Field(() => NestedEnumPermitStatusFilter, {nullable:true})
    not?: NestedEnumPermitStatusFilter;
}
