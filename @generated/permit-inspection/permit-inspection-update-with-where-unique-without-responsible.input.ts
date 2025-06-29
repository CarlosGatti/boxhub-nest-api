import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Type } from 'class-transformer';
import { PermitInspectionUpdateWithoutResponsibleInput } from './permit-inspection-update-without-responsible.input';

@InputType()
export class PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput {

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:false})
    @Type(() => PermitInspectionWhereUniqueInput)
    where!: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => PermitInspectionUpdateWithoutResponsibleInput, {nullable:false})
    @Type(() => PermitInspectionUpdateWithoutResponsibleInput)
    data!: PermitInspectionUpdateWithoutResponsibleInput;
}
