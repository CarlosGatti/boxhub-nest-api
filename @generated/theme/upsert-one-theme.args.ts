import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Type } from 'class-transformer';
import { ThemeCreateInput } from './theme-create.input';
import { ThemeUpdateInput } from './theme-update.input';

@ArgsType()
export class UpsertOneThemeArgs {

    @Field(() => ThemeWhereUniqueInput, {nullable:false})
    @Type(() => ThemeWhereUniqueInput)
    where!: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;

    @Field(() => ThemeCreateInput, {nullable:false})
    @Type(() => ThemeCreateInput)
    create!: ThemeCreateInput;

    @Field(() => ThemeUpdateInput, {nullable:false})
    @Type(() => ThemeUpdateInput)
    update!: ThemeUpdateInput;
}
