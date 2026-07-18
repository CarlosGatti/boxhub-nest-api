import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceOrderByWithRelationInput } from './defined-academy-resource-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceScalarFieldEnum } from './defined-academy-resource-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => [DefinedAcademyResourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyResourceOrderByWithRelationInput>;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyResourceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyResourceScalarFieldEnum>;
}
