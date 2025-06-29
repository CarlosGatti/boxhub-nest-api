import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionCreateManyInput } from './permit-inspection-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermitInspectionArgs {

    @Field(() => [PermitInspectionCreateManyInput], {nullable:false})
    @Type(() => PermitInspectionCreateManyInput)
    data!: Array<PermitInspectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
