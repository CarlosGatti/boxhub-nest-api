import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateInput } from './app-create.input';
import { AppUpdateInput } from './app-update.input';

@ArgsType()
export class UpsertOneAppArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppCreateInput, {nullable:false})
    @Type(() => AppCreateInput)
    create!: AppCreateInput;

    @Field(() => AppUpdateInput, {nullable:false})
    @Type(() => AppUpdateInput)
    update!: AppUpdateInput;
}
