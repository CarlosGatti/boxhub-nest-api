import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessUpdateInput } from './process-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';

@ArgsType()
export class UpdateOneProcessArgs {

    @Field(() => ProcessUpdateInput, {nullable:false})
    @Type(() => ProcessUpdateInput)
    data!: ProcessUpdateInput;

    @Field(() => ProcessWhereUniqueInput, {nullable:false})
    @Type(() => ProcessWhereUniqueInput)
    where!: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;
}
