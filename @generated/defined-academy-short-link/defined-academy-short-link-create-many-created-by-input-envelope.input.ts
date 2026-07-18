import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyCreatedByInput } from './defined-academy-short-link-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyCreatedByInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyCreatedByInput)
    data!: Array<DefinedAcademyShortLinkCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
