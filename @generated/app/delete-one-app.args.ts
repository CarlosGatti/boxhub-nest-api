import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAppArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;
}
