import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingWhereInput } from './holding-where.input';
import { Type } from 'class-transformer';
import { HoldingOrderByWithRelationInput } from './holding-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HoldingScalarFieldEnum } from './holding-scalar-field.enum';

@ArgsType()
export class FindManyHoldingArgs {

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    where?: HoldingWhereInput;

    @Field(() => [HoldingOrderByWithRelationInput], {nullable:true})
    @Type(() => HoldingOrderByWithRelationInput)
    orderBy?: Array<HoldingOrderByWithRelationInput>;

    @Field(() => HoldingWhereUniqueInput, {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    cursor?: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HoldingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HoldingScalarFieldEnum>;
}
