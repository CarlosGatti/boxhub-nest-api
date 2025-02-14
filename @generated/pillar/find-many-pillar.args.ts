import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarWhereInput } from './pillar-where.input';
import { Type } from 'class-transformer';
import { PillarOrderByWithRelationInput } from './pillar-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PillarScalarFieldEnum } from './pillar-scalar-field.enum';

@ArgsType()
export class FindManyPillarArgs {

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;

    @Field(() => [PillarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PillarOrderByWithRelationInput>;

    @Field(() => PillarWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PillarScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PillarScalarFieldEnum>;
}
