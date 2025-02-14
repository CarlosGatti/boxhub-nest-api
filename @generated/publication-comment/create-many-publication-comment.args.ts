import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentCreateManyInput } from './publication-comment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPublicationCommentArgs {

    @Field(() => [PublicationCommentCreateManyInput], {nullable:false})
    @Type(() => PublicationCommentCreateManyInput)
    data!: Array<PublicationCommentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
