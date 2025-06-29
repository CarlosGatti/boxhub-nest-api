import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermitInspectionArgs {

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    @Type(() => PermitInspectionWhereInput)
    where?: PermitInspectionWhereInput;
}
