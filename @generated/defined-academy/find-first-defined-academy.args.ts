import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyOrderByWithRelationInput } from './defined-academy-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyScalarFieldEnum } from './defined-academy-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyArgs {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => [DefinedAcademyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyOrderByWithRelationInput>;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyScalarFieldEnum>;
}
