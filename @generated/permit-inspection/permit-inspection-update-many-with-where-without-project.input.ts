import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionScalarWhereInput } from './permit-inspection-scalar-where.input';
import { Type } from 'class-transformer';
import { PermitInspectionUpdateManyMutationInput } from './permit-inspection-update-many-mutation.input';

@InputType()
export class PermitInspectionUpdateManyWithWhereWithoutProjectInput {

    @Field(() => PermitInspectionScalarWhereInput, {nullable:false})
    @Type(() => PermitInspectionScalarWhereInput)
    where!: PermitInspectionScalarWhereInput;

    @Field(() => PermitInspectionUpdateManyMutationInput, {nullable:false})
    @Type(() => PermitInspectionUpdateManyMutationInput)
    data!: PermitInspectionUpdateManyMutationInput;
}
