import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeUpdateInput } from './theme-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';

@ArgsType()
export class UpdateOneThemeArgs {

    @Field(() => ThemeUpdateInput, {nullable:false})
    @Type(() => ThemeUpdateInput)
    data!: ThemeUpdateInput;

    @Field(() => ThemeWhereUniqueInput, {nullable:false})
    @Type(() => ThemeWhereUniqueInput)
    where!: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;
}
