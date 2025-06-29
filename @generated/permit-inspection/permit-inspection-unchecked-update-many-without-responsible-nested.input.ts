import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateWithoutResponsibleInput } from './permit-inspection-create-without-responsible.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateOrConnectWithoutResponsibleInput } from './permit-inspection-create-or-connect-without-responsible.input';
import { PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput } from './permit-inspection-upsert-with-where-unique-without-responsible.input';
import { PermitInspectionCreateManyResponsibleInputEnvelope } from './permit-inspection-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput } from './permit-inspection-update-with-where-unique-without-responsible.input';
import { PermitInspectionUpdateManyWithWhereWithoutResponsibleInput } from './permit-inspection-update-many-with-where-without-responsible.input';
import { PermitInspectionScalarWhereInput } from './permit-inspection-scalar-where.input';

@InputType()
export class PermitInspectionUncheckedUpdateManyWithoutResponsibleNestedInput {

    @Field(() => [PermitInspectionCreateWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionCreateWithoutResponsibleInput)
    create?: Array<PermitInspectionCreateWithoutResponsibleInput>;

    @Field(() => [PermitInspectionCreateOrConnectWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionCreateOrConnectWithoutResponsibleInput)
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutResponsibleInput>;

    @Field(() => [PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput)
    upsert?: Array<PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput>;

    @Field(() => PermitInspectionCreateManyResponsibleInputEnvelope, {nullable:true})
    @Type(() => PermitInspectionCreateManyResponsibleInputEnvelope)
    createMany?: PermitInspectionCreateManyResponsibleInputEnvelope;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;

    @Field(() => [PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput)
    update?: Array<PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput>;

    @Field(() => [PermitInspectionUpdateManyWithWhereWithoutResponsibleInput], {nullable:true})
    @Type(() => PermitInspectionUpdateManyWithWhereWithoutResponsibleInput)
    updateMany?: Array<PermitInspectionUpdateManyWithWhereWithoutResponsibleInput>;

    @Field(() => [PermitInspectionScalarWhereInput], {nullable:true})
    @Type(() => PermitInspectionScalarWhereInput)
    deleteMany?: Array<PermitInspectionScalarWhereInput>;
}
