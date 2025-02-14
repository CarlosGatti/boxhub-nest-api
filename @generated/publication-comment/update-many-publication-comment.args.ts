import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentUpdateManyMutationInput } from './publication-comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PublicationCommentWhereInput } from './publication-comment-where.input';

@ArgsType()
export class UpdateManyPublicationCommentArgs {

    @Field(() => PublicationCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationCommentUpdateManyMutationInput)
    data!: PublicationCommentUpdateManyMutationInput;

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    @Type(() => PublicationCommentWhereInput)
    where?: PublicationCommentWhereInput;
}
