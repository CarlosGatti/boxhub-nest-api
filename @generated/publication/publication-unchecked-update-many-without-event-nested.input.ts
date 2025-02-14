import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutEventInput } from './publication-create-without-event.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutEventInput } from './publication-create-or-connect-without-event.input';
import { PublicationUpsertWithWhereUniqueWithoutEventInput } from './publication-upsert-with-where-unique-without-event.input';
import { PublicationCreateManyEventInputEnvelope } from './publication-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationUpdateWithWhereUniqueWithoutEventInput } from './publication-update-with-where-unique-without-event.input';
import { PublicationUpdateManyWithWhereWithoutEventInput } from './publication-update-many-with-where-without-event.input';
import { PublicationScalarWhereInput } from './publication-scalar-where.input';

@InputType()
export class PublicationUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [PublicationCreateWithoutEventInput], {nullable:true})
    @Type(() => PublicationCreateWithoutEventInput)
    create?: Array<PublicationCreateWithoutEventInput>;

    @Field(() => [PublicationCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutEventInput>;

    @Field(() => [PublicationUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => PublicationUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<PublicationUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => PublicationCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyEventInputEnvelope)
    createMany?: PublicationCreateManyEventInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => PublicationUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<PublicationUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [PublicationUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => PublicationUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<PublicationUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    @Type(() => PublicationScalarWhereInput)
    deleteMany?: Array<PublicationScalarWhereInput>;
}
