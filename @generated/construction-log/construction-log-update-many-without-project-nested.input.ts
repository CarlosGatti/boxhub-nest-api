import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateOrConnectWithoutProjectInput } from './construction-log-create-or-connect-without-project.input';
import { ConstructionLogUpsertWithWhereUniqueWithoutProjectInput } from './construction-log-upsert-with-where-unique-without-project.input';
import { ConstructionLogCreateManyProjectInputEnvelope } from './construction-log-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithWhereUniqueWithoutProjectInput } from './construction-log-update-with-where-unique-without-project.input';
import { ConstructionLogUpdateManyWithWhereWithoutProjectInput } from './construction-log-update-many-with-where-without-project.input';
import { ConstructionLogScalarWhereInput } from './construction-log-scalar-where.input';

@InputType()
export class ConstructionLogUpdateManyWithoutProjectNestedInput {

    @Field(() => [ConstructionLogCreateWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogCreateWithoutProjectInput)
    create?: Array<ConstructionLogCreateWithoutProjectInput>;

    @Field(() => [ConstructionLogCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutProjectInput>;

    @Field(() => [ConstructionLogUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ConstructionLogUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ConstructionLogCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ConstructionLogCreateManyProjectInputEnvelope)
    createMany?: ConstructionLogCreateManyProjectInputEnvelope;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ConstructionLogUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ConstructionLogUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ConstructionLogUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ConstructionLogScalarWhereInput], {nullable:true})
    @Type(() => ConstructionLogScalarWhereInput)
    deleteMany?: Array<ConstructionLogScalarWhereInput>;
}
