import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';

@InputType()
export class PermitInspectionListRelationFilter {

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    every?: PermitInspectionWhereInput;

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    some?: PermitInspectionWhereInput;

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    none?: PermitInspectionWhereInput;
}
