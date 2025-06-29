import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateOrConnectWithoutProjectInput } from './permit-inspection-create-or-connect-without-project.input';
import { PermitInspectionUpsertWithWhereUniqueWithoutProjectInput } from './permit-inspection-upsert-with-where-unique-without-project.input';
import { PermitInspectionCreateManyProjectInputEnvelope } from './permit-inspection-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { PermitInspectionUpdateWithWhereUniqueWithoutProjectInput } from './permit-inspection-update-with-where-unique-without-project.input';
import { PermitInspectionUpdateManyWithWhereWithoutProjectInput } from './permit-inspection-update-many-with-where-without-project.input';
import { PermitInspectionScalarWhereInput } from './permit-inspection-scalar-where.input';

@InputType()
export class PermitInspectionUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [PermitInspectionCreateWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionCreateWithoutProjectInput)
    create?: Array<PermitInspectionCreateWithoutProjectInput>;

    @Field(() => [PermitInspectionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutProjectInput>;

    @Field(() => [PermitInspectionUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<PermitInspectionUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => PermitInspectionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PermitInspectionCreateManyProjectInputEnvelope)
    createMany?: PermitInspectionCreateManyProjectInputEnvelope;

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

    @Field(() => [PermitInspectionUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<PermitInspectionUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [PermitInspectionUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<PermitInspectionUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [PermitInspectionScalarWhereInput], {nullable:true})
    @Type(() => PermitInspectionScalarWhereInput)
    deleteMany?: Array<PermitInspectionScalarWhereInput>;
}
