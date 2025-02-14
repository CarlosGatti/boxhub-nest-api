import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';
import { Type } from 'class-transformer';
import { ProcessOrderByWithRelationInput } from './process-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProcessScalarFieldEnum } from './process-scalar-field.enum';

@ArgsType()
export class FindFirstProcessOrThrowArgs {

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;

    @Field(() => [ProcessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProcessOrderByWithRelationInput>;

    @Field(() => ProcessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProcessScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProcessScalarFieldEnum>;
}
