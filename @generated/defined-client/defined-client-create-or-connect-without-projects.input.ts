import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutProjectsInput } from './defined-client-create-without-projects.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutProjectsInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutProjectsInput)
    create!: DefinedClientCreateWithoutProjectsInput;
}
