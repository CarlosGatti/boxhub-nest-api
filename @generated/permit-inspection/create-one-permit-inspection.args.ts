import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionCreateInput } from './permit-inspection-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermitInspectionArgs {

    @Field(() => PermitInspectionCreateInput, {nullable:false})
    @Type(() => PermitInspectionCreateInput)
    data!: PermitInspectionCreateInput;
}
