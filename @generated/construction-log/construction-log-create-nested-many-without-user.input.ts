import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateOrConnectWithoutUserInput } from './construction-log-create-or-connect-without-user.input';
import { ConstructionLogCreateManyUserInputEnvelope } from './construction-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';

@InputType()
export class ConstructionLogCreateNestedManyWithoutUserInput {

    @Field(() => [ConstructionLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogCreateWithoutUserInput)
    create?: Array<ConstructionLogCreateWithoutUserInput>;

    @Field(() => [ConstructionLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutUserInput>;

    @Field(() => ConstructionLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ConstructionLogCreateManyUserInputEnvelope)
    createMany?: ConstructionLogCreateManyUserInputEnvelope;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;
}
