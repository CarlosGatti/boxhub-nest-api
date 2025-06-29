import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateOrConnectWithoutReceivedByInput } from './material-entry-create-or-connect-without-received-by.input';
import { MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput } from './material-entry-upsert-with-where-unique-without-received-by.input';
import { MaterialEntryCreateManyReceivedByInputEnvelope } from './material-entry-create-many-received-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput } from './material-entry-update-with-where-unique-without-received-by.input';
import { MaterialEntryUpdateManyWithWhereWithoutReceivedByInput } from './material-entry-update-many-with-where-without-received-by.input';
import { MaterialEntryScalarWhereInput } from './material-entry-scalar-where.input';

@InputType()
export class MaterialEntryUncheckedUpdateManyWithoutReceivedByNestedInput {

    @Field(() => [MaterialEntryCreateWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryCreateWithoutReceivedByInput)
    create?: Array<MaterialEntryCreateWithoutReceivedByInput>;

    @Field(() => [MaterialEntryCreateOrConnectWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryCreateOrConnectWithoutReceivedByInput)
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>;

    @Field(() => [MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput)
    upsert?: Array<MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput>;

    @Field(() => MaterialEntryCreateManyReceivedByInputEnvelope, {nullable:true})
    @Type(() => MaterialEntryCreateManyReceivedByInputEnvelope)
    createMany?: MaterialEntryCreateManyReceivedByInputEnvelope;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput)
    update?: Array<MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput>;

    @Field(() => [MaterialEntryUpdateManyWithWhereWithoutReceivedByInput], {nullable:true})
    @Type(() => MaterialEntryUpdateManyWithWhereWithoutReceivedByInput)
    updateMany?: Array<MaterialEntryUpdateManyWithWhereWithoutReceivedByInput>;

    @Field(() => [MaterialEntryScalarWhereInput], {nullable:true})
    @Type(() => MaterialEntryScalarWhereInput)
    deleteMany?: Array<MaterialEntryScalarWhereInput>;
}
