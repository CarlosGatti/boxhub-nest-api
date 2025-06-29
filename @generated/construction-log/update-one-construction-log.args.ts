import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogUpdateInput } from './construction-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';

@ArgsType()
export class UpdateOneConstructionLogArgs {

    @Field(() => ConstructionLogUpdateInput, {nullable:false})
    @Type(() => ConstructionLogUpdateInput)
    data!: ConstructionLogUpdateInput;

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
}
