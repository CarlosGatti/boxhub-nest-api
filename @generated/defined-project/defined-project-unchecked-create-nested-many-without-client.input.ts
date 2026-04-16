import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutClientInput } from './defined-project-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutClientInput } from './defined-project-create-or-connect-without-client.input';
import { DefinedProjectCreateManyClientInputEnvelope } from './defined-project-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedProjectCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectCreateWithoutClientInput)
    create?: Array<DefinedProjectCreateWithoutClientInput>;

    @Field(() => [DefinedProjectCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedProjectCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedProjectCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedProjectCreateManyClientInputEnvelope)
    createMany?: DefinedProjectCreateManyClientInputEnvelope;

    @Field(() => [DefinedProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>>;
}
