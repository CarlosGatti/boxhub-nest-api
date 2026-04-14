import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadStatus } from './defined-lead-status.enum';

@InputType()
export class NestedEnumDefinedLeadStatusFilter {

    @Field(() => DefinedLeadStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadStatus;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => NestedEnumDefinedLeadStatusFilter, {nullable:true})
    not?: NestedEnumDefinedLeadStatusFilter;
}
