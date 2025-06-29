import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';
import { ConstructionLogUpdateWithoutUserInput } from './construction-log-update-without-user.input';
import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';

@InputType()
export class ConstructionLogUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => ConstructionLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => ConstructionLogUpdateWithoutUserInput)
    update!: ConstructionLogUpdateWithoutUserInput;

    @Field(() => ConstructionLogCreateWithoutUserInput, {nullable:false})
    @Type(() => ConstructionLogCreateWithoutUserInput)
    create!: ConstructionLogCreateWithoutUserInput;
}
