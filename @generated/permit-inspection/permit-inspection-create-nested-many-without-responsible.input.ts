import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateOrConnectWithoutResponsibleInput } from './permit-inspection-create-or-connect-without-responsible.input';
import { PermitInspectionCreateManyResponsibleInputEnvelope } from './permit-inspection-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';

@InputType()
export class PermitInspectionCreateNestedManyWithoutResponsibleInput {

    @Field(() => [PermitInspectionCreateWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionCreateWithoutResponsibleInput)
    create?: Array<PermitInspectionCreateWithoutResponsibleInput>;

    @Field(() => [PermitInspectionCreateOrConnectWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionCreateOrConnectWithoutResponsibleInput)
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>;

    @Field(() => PermitInspectionCreateManyResponsibleInputEnvelope, {nullable:true})
    @Type(() => PermitInspectionCreateManyResponsibleInputEnvelope)
    createMany?: PermitInspectionCreateManyResponsibleInputEnvelope;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
}
