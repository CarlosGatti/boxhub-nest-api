import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionUpdateManyMutationInput } from './permit-inspection-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';

@ArgsType()
export class UpdateManyPermitInspectionArgs {

    @Field(() => PermitInspectionUpdateManyMutationInput, {nullable:false})
    @Type(() => PermitInspectionUpdateManyMutationInput)
    data!: PermitInspectionUpdateManyMutationInput;

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    @Type(() => PermitInspectionWhereInput)
    where?: PermitInspectionWhereInput;
}
