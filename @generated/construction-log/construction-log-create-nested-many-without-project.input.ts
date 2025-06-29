import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateOrConnectWithoutProjectInput } from './construction-log-create-or-connect-without-project.input';
import { ConstructionLogCreateManyProjectInputEnvelope } from './construction-log-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';

@InputType()
export class ConstructionLogCreateNestedManyWithoutProjectInput {

    @Field(() => [ConstructionLogCreateWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogCreateWithoutProjectInput)
    create?: Array<ConstructionLogCreateWithoutProjectInput>;

    @Field(() => [ConstructionLogCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ConstructionLogCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutProjectInput>;

    @Field(() => ConstructionLogCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ConstructionLogCreateManyProjectInputEnvelope)
    createMany?: ConstructionLogCreateManyProjectInputEnvelope;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
}
