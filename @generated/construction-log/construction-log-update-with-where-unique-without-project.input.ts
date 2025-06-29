import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';
import { ConstructionLogUpdateWithoutProjectInput } from './construction-log-update-without-project.input';

@InputType()
export class ConstructionLogUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => ConstructionLogUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ConstructionLogUpdateWithoutProjectInput)
    data!: ConstructionLogUpdateWithoutProjectInput;
}
