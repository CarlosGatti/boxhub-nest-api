import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutCreatedByInput } from './defined-academy-short-link-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput } from './defined-academy-short-link-create-or-connect-without-created-by.input';
import { DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope } from './defined-academy-short-link-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
