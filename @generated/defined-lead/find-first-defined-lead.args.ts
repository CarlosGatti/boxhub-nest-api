import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadWhereInput } from './defined-lead-where.input';
import { Type } from 'class-transformer';
import { DefinedLeadOrderByWithRelationInput } from './defined-lead-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedLeadWhereUniqueInput } from './defined-lead-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedLeadScalarFieldEnum } from './defined-lead-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedLeadArgs {

    @Field(() => DefinedLeadWhereInput, {nullable:true})
    @Type(() => DefinedLeadWhereInput)
    where?: DefinedLeadWhereInput;

    @Field(() => [DefinedLeadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedLeadOrderByWithRelationInput>;

    @Field(() => DefinedLeadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedLeadWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedLeadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedLeadScalarFieldEnum>;
}
