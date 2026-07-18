import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyResourceInput } from './defined-academy-short-link-create-many-resource.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyResourceInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyResourceInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyResourceInput)
    data!: Array<DefinedAcademyShortLinkCreateManyResourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
