import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueConstructionLogOrThrowArgs {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
}
