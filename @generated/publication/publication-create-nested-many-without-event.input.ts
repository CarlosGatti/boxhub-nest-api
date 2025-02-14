import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutEventInput } from './publication-create-without-event.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutEventInput } from './publication-create-or-connect-without-event.input';
import { PublicationCreateManyEventInputEnvelope } from './publication-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationCreateNestedManyWithoutEventInput {

    @Field(() => [PublicationCreateWithoutEventInput], {nullable:true})
    @Type(() => PublicationCreateWithoutEventInput)
    create?: Array<PublicationCreateWithoutEventInput>;

    @Field(() => [PublicationCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutEventInput>;

    @Field(() => PublicationCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyEventInputEnvelope)
    createMany?: PublicationCreateManyEventInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;
}
