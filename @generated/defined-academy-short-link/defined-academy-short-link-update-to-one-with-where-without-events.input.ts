import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutEventsInput } from './defined-academy-short-link-update-without-events.input';

@InputType()
export class DefinedAcademyShortLinkUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutEventsInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutEventsInput)
    data!: DefinedAcademyShortLinkUpdateWithoutEventsInput;
}
