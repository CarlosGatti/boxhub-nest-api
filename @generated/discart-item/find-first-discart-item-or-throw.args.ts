import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';
import { Type } from 'class-transformer';
import { DiscartItemOrderByWithRelationInput } from './discart-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DiscartItemScalarFieldEnum } from './discart-item-scalar-field.enum';

@ArgsType()
export class FindFirstDiscartItemOrThrowArgs {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;

    @Field(() => [DiscartItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DiscartItemOrderByWithRelationInput>;

    @Field(() => DiscartItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DiscartItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DiscartItemScalarFieldEnum>;
}
