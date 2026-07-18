import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCreateManyShortLinkInput } from './defined-academy-short-link-event-create-many-short-link.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkEventCreateManyShortLinkInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventCreateManyShortLinkInput)
    data!: Array<DefinedAcademyShortLinkEventCreateManyShortLinkInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
