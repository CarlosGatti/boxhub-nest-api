import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { Type } from 'class-transformer';
import { LogOrderByWithRelationInput } from './log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogScalarFieldEnum } from './log-scalar-field.enum';

@ArgsType()
export class FindManyLogArgs {

    @Field(() => LogWhereInput, {nullable:true})
    @Type(() => LogWhereInput)
    where?: LogWhereInput;

    @Field(() => [LogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogOrderByWithRelationInput>;

    @Field(() => LogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LogScalarFieldEnum>;
}
