import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutClientInput } from './defined-project-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutClientInput } from './defined-project-create-or-connect-without-client.input';
import { DefinedProjectUpsertWithWhereUniqueWithoutClientInput } from './defined-project-upsert-with-where-unique-without-client.input';
import { DefinedProjectCreateManyClientInputEnvelope } from './defined-project-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateWithWhereUniqueWithoutClientInput } from './defined-project-update-with-where-unique-without-client.input';
import { DefinedProjectUpdateManyWithWhereWithoutClientInput } from './defined-project-update-many-with-where-without-client.input';
import { DefinedProjectScalarWhereInput } from './defined-project-scalar-where.input';

@InputType()
export class DefinedProjectUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedProjectCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectCreateWithoutClientInput)
    create?: Array<DefinedProjectCreateWithoutClientInput>;

    @Field(() => [DefinedProjectCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedProjectCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedProjectUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedProjectUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedProjectCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedProjectCreateManyClientInputEnvelope)
    createMany?: DefinedProjectCreateManyClientInputEnvelope;

    @Field(() => [DefinedProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProjectUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedProjectUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedProjectUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedProjectUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedProjectUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedProjectScalarWhereInput], {nullable:true})
    @Type(() => DefinedProjectScalarWhereInput)
    deleteMany?: Array<DefinedProjectScalarWhereInput>;
}
