import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateWithoutProjectInput } from './permit-inspection-create-without-project.input';

@InputType()
export class PermitInspectionCreateOrConnectWithoutProjectInput {

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:false})
    @Type(() => PermitInspectionWhereUniqueInput)
    where!: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => PermitInspectionCreateWithoutProjectInput, {nullable:false})
    @Type(() => PermitInspectionCreateWithoutProjectInput)
    create!: PermitInspectionCreateWithoutProjectInput;
}
