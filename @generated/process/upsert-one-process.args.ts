import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { Type } from 'class-transformer';
import { ProcessCreateInput } from './process-create.input';
import { ProcessUpdateInput } from './process-update.input';

@ArgsType()
export class UpsertOneProcessArgs {

    @Field(() => ProcessWhereUniqueInput, {nullable:false})
    @Type(() => ProcessWhereUniqueInput)
    where!: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;

    @Field(() => ProcessCreateInput, {nullable:false})
    @Type(() => ProcessCreateInput)
    create!: ProcessCreateInput;

    @Field(() => ProcessUpdateInput, {nullable:false})
    @Type(() => ProcessUpdateInput)
    update!: ProcessUpdateInput;
}
