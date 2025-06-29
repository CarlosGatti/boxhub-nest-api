import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Type } from 'class-transformer';
import { PermitInspectionUpdateWithoutProjectInput } from './permit-inspection-update-without-project.input';

@InputType()
export class PermitInspectionUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:false})
    @Type(() => PermitInspectionWhereUniqueInput)
    where!: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => PermitInspectionUpdateWithoutProjectInput, {nullable:false})
    @Type(() => PermitInspectionUpdateWithoutProjectInput)
    data!: PermitInspectionUpdateWithoutProjectInput;
}
