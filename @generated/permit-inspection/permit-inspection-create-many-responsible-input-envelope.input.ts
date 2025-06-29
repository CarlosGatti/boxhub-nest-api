import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateManyResponsibleInput } from './permit-inspection-create-many-responsible.input';
import { Type } from 'class-transformer';

@InputType()
export class PermitInspectionCreateManyResponsibleInputEnvelope {

    @Field(() => [PermitInspectionCreateManyResponsibleInput], {nullable:false})
    @Type(() => PermitInspectionCreateManyResponsibleInput)
    data!: Array<PermitInspectionCreateManyResponsibleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
