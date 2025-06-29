import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';
import { ConstructionLogUpdateWithoutProjectInput } from './construction-log-update-without-project.input';
import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';

@InputType()
export class ConstructionLogUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => ConstructionLogUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ConstructionLogUpdateWithoutProjectInput)
    update!: ConstructionLogUpdateWithoutProjectInput;

    @Field(() => ConstructionLogCreateWithoutProjectInput, {nullable:false})
    @Type(() => ConstructionLogCreateWithoutProjectInput)
    create!: ConstructionLogCreateWithoutProjectInput;
}
