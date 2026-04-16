import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutProjectsInput } from './defined-client-create-without-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutProjectsInput } from './defined-client-create-or-connect-without-projects.input';
import { DefinedClientUpsertWithoutProjectsInput } from './defined-client-upsert-without-projects.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutProjectsInput } from './defined-client-update-to-one-with-where-without-projects.input';

@InputType()
export class DefinedClientUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => DefinedClientCreateWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutProjectsInput)
    create?: DefinedClientCreateWithoutProjectsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutProjectsInput;

    @Field(() => DefinedClientUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutProjectsInput)
    upsert?: DefinedClientUpsertWithoutProjectsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutProjectsInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutProjectsInput;
}
