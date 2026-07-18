import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyInput } from './defined-academy-short-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyShortLinkArgs {

    @Field(() => [DefinedAcademyShortLinkCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyInput)
    data!: Array<DefinedAcademyShortLinkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
