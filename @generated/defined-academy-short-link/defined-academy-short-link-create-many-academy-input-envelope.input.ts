import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyAcademyInput } from './defined-academy-short-link-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyAcademyInput)
    data!: Array<DefinedAcademyShortLinkCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
