import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionUpdateInput } from './permit-inspection-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';

@ArgsType()
export class UpdateOnePermitInspectionArgs {

    @Field(() => PermitInspectionUpdateInput, {nullable:false})
    @Type(() => PermitInspectionUpdateInput)
    data!: PermitInspectionUpdateInput;

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:false})
    @Type(() => PermitInspectionWhereUniqueInput)
    where!: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;
}
