import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutProjectsInput } from './defined-client-create-without-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutProjectsInput } from './defined-client-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutProjectsInput {

    @Field(() => DefinedClientCreateWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutProjectsInput)
    create?: DefinedClientCreateWithoutProjectsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutProjectsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
