import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueThemeOrThrowArgs {

    @Field(() => ThemeWhereUniqueInput, {nullable:false})
    @Type(() => ThemeWhereUniqueInput)
    where!: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;
}
