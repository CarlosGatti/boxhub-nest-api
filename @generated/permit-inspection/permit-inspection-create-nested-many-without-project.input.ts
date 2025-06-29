import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateOrConnectWithoutProjectInput } from './permit-inspection-create-or-connect-without-project.input';
import { PermitInspectionCreateManyProjectInputEnvelope } from './permit-inspection-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';

@InputType()
export class PermitInspectionCreateNestedManyWithoutProjectInput {

    @Field(() => [PermitInspectionCreateWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionCreateWithoutProjectInput)
    create?: Array<PermitInspectionCreateWithoutProjectInput>;

    @Field(() => [PermitInspectionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PermitInspectionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PermitInspectionCreateOrConnectWithoutProjectInput>;

    @Field(() => PermitInspectionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PermitInspectionCreateManyProjectInputEnvelope)
    createMany?: PermitInspectionCreateManyProjectInputEnvelope;

    @Field(() => [PermitInspectionWhereUniqueInput], {nullable:true})
    @Type(() => PermitInspectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>>;
}
