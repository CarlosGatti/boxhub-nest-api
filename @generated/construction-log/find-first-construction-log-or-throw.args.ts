import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { Type } from 'class-transformer';
import { ConstructionLogOrderByWithRelationInput } from './construction-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConstructionLogScalarFieldEnum } from './construction-log-scalar-field.enum';

@ArgsType()
export class FindFirstConstructionLogOrThrowArgs {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;

    @Field(() => [ConstructionLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConstructionLogOrderByWithRelationInput>;

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConstructionLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConstructionLogScalarFieldEnum>;
}
