import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCreateManyInput } from './defined-academy-short-link-event-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyShortLinkEventArgs {

    @Field(() => [DefinedAcademyShortLinkEventCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventCreateManyInput)
    data!: Array<DefinedAcademyShortLinkEventCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
