import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateManyProjectInput } from './permit-inspection-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class PermitInspectionCreateManyProjectInputEnvelope {

    @Field(() => [PermitInspectionCreateManyProjectInput], {nullable:false})
    @Type(() => PermitInspectionCreateManyProjectInput)
    data!: Array<PermitInspectionCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
