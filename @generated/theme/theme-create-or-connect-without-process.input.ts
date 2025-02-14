import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Type } from 'class-transformer';
import { ThemeCreateWithoutProcessInput } from './theme-create-without-process.input';

@InputType()
export class ThemeCreateOrConnectWithoutProcessInput {

    @Field(() => ThemeWhereUniqueInput, {nullable:false})
    @Type(() => ThemeWhereUniqueInput)
    where!: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;

    @Field(() => ThemeCreateWithoutProcessInput, {nullable:false})
    @Type(() => ThemeCreateWithoutProcessInput)
    create!: ThemeCreateWithoutProcessInput;
}
