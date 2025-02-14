import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';
import { Type } from 'class-transformer';
import { ThemeOrderByWithRelationInput } from './theme-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThemeScalarFieldEnum } from './theme-scalar-field.enum';

@ArgsType()
export class FindFirstThemeOrThrowArgs {

    @Field(() => ThemeWhereInput, {nullable:true})
    @Type(() => ThemeWhereInput)
    where?: ThemeWhereInput;

    @Field(() => [ThemeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThemeOrderByWithRelationInput>;

    @Field(() => ThemeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ThemeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ThemeScalarFieldEnum>;
}
