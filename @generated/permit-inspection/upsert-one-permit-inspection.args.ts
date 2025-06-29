import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Type } from 'class-transformer';
import { PermitInspectionCreateInput } from './permit-inspection-create.input';
import { PermitInspectionUpdateInput } from './permit-inspection-update.input';

@ArgsType()
export class UpsertOnePermitInspectionArgs {

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:false})
    @Type(() => PermitInspectionWhereUniqueInput)
    where!: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => PermitInspectionCreateInput, {nullable:false})
    @Type(() => PermitInspectionCreateInput)
    create!: PermitInspectionCreateInput;

    @Field(() => PermitInspectionUpdateInput, {nullable:false})
    @Type(() => PermitInspectionUpdateInput)
    update!: PermitInspectionUpdateInput;
}
