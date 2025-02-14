import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Type } from 'class-transformer';
import { ThemeUpdateWithoutProcessInput } from './theme-update-without-process.input';

@InputType()
export class ThemeUpdateWithWhereUniqueWithoutProcessInput {

    @Field(() => ThemeWhereUniqueInput, {nullable:false})
    @Type(() => ThemeWhereUniqueInput)
    where!: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;

    @Field(() => ThemeUpdateWithoutProcessInput, {nullable:false})
    @Type(() => ThemeUpdateWithoutProcessInput)
    data!: ThemeUpdateWithoutProcessInput;
}
