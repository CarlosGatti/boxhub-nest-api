import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyPartnerInput } from './defined-academy-short-link-create-many-partner.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyPartnerInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyPartnerInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyPartnerInput)
    data!: Array<DefinedAcademyShortLinkCreateManyPartnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
