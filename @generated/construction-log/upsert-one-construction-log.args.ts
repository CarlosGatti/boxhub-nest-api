import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateInput } from './construction-log-create.input';
import { ConstructionLogUpdateInput } from './construction-log-update.input';

@ArgsType()
export class UpsertOneConstructionLogArgs {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => ConstructionLogCreateInput, {nullable:false})
    @Type(() => ConstructionLogCreateInput)
    create!: ConstructionLogCreateInput;

    @Field(() => ConstructionLogUpdateInput, {nullable:false})
    @Type(() => ConstructionLogUpdateInput)
    update!: ConstructionLogUpdateInput;
}
