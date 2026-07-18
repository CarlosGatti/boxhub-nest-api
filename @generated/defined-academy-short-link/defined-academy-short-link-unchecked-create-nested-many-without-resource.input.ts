import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutResourceInput } from './defined-academy-short-link-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput } from './defined-academy-short-link-create-or-connect-without-resource.input';
import { DefinedAcademyShortLinkCreateManyResourceInputEnvelope } from './defined-academy-short-link-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutResourceInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutResourceInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyResourceInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
