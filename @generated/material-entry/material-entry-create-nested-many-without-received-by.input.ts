import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateOrConnectWithoutReceivedByInput } from './material-entry-create-or-connect-without-received-by.input';
import { MaterialEntryCreateManyReceivedByInputEnvelope } from './material-entry-create-many-received-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';

@InputType()
export class MaterialEntryCreateNestedManyWithoutReceivedByInput {

    @Field(() => [MaterialEntryCreateWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryCreateWithoutReceivedByInput)
    create?: Array<MaterialEntryCreateWithoutReceivedByInput>;

    @Field(() => [MaterialEntryCreateOrConnectWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryCreateOrConnectWithoutReceivedByInput)
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>;

    @Field(() => MaterialEntryCreateManyReceivedByInputEnvelope, {nullable:true})
    @Type(() => MaterialEntryCreateManyReceivedByInputEnvelope)
    createMany?: MaterialEntryCreateManyReceivedByInputEnvelope;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
}
