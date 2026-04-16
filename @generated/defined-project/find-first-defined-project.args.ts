import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectOrderByWithRelationInput } from './defined-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProjectScalarFieldEnum } from './defined-project-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedProjectArgs {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => [DefinedProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedProjectOrderByWithRelationInput>;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedProjectScalarFieldEnum>;
}
