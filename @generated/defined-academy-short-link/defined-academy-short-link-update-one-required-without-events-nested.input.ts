import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutEventsInput } from './defined-academy-short-link-create-without-events.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutEventsInput } from './defined-academy-short-link-create-or-connect-without-events.input';
import { DefinedAcademyShortLinkUpsertWithoutEventsInput } from './defined-academy-short-link-upsert-without-events.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateToOneWithWhereWithoutEventsInput } from './defined-academy-short-link-update-to-one-with-where-without-events.input';

@InputType()
export class DefinedAcademyShortLinkUpdateOneRequiredWithoutEventsNestedInput {

    @Field(() => DefinedAcademyShortLinkCreateWithoutEventsInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutEventsInput)
    create?: DefinedAcademyShortLinkCreateWithoutEventsInput;

    @Field(() => DefinedAcademyShortLinkCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutEventsInput)
    connectOrCreate?: DefinedAcademyShortLinkCreateOrConnectWithoutEventsInput;

    @Field(() => DefinedAcademyShortLinkUpsertWithoutEventsInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithoutEventsInput)
    upsert?: DefinedAcademyShortLinkUpsertWithoutEventsInput;

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateToOneWithWhereWithoutEventsInput)
    update?: DefinedAcademyShortLinkUpdateToOneWithWhereWithoutEventsInput;
}
