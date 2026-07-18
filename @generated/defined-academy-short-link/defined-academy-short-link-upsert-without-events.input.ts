import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkUpdateWithoutEventsInput } from './defined-academy-short-link-update-without-events.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutEventsInput } from './defined-academy-short-link-create-without-events.input';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';

@InputType()
export class DefinedAcademyShortLinkUpsertWithoutEventsInput {

    @Field(() => DefinedAcademyShortLinkUpdateWithoutEventsInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutEventsInput)
    update!: DefinedAcademyShortLinkUpdateWithoutEventsInput;

    @Field(() => DefinedAcademyShortLinkCreateWithoutEventsInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutEventsInput)
    create!: DefinedAcademyShortLinkCreateWithoutEventsInput;

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;
}
