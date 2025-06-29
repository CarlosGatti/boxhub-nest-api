import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';
import { Type } from 'class-transformer';
import { SubcontractorOrderByWithRelationInput } from './subcontractor-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubcontractorScalarFieldEnum } from './subcontractor-scalar-field.enum';

@ArgsType()
export class FindFirstSubcontractorArgs {

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;

    @Field(() => [SubcontractorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubcontractorOrderByWithRelationInput>;

    @Field(() => SubcontractorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubcontractorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubcontractorScalarFieldEnum>;
}
