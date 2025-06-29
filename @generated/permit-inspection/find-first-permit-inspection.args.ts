import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';
import { Type } from 'class-transformer';
import { PermitInspectionOrderByWithRelationInput } from './permit-inspection-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermitInspectionScalarFieldEnum } from './permit-inspection-scalar-field.enum';

@ArgsType()
export class FindFirstPermitInspectionArgs {

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    @Type(() => PermitInspectionWhereInput)
    where?: PermitInspectionWhereInput;

    @Field(() => [PermitInspectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermitInspectionOrderByWithRelationInput>;

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermitInspectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermitInspectionScalarFieldEnum>;
}
