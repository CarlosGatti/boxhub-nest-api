import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogUpdateInput } from './log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';

@ArgsType()
export class UpdateOneLogArgs {

    @Field(() => LogUpdateInput, {nullable:false})
    @Type(() => LogUpdateInput)
    data!: LogUpdateInput;

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;
}
