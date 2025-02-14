import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentScalarWhereInput } from './publication-comment-scalar-where.input';
import { Type } from 'class-transformer';
import { PublicationCommentUpdateManyMutationInput } from './publication-comment-update-many-mutation.input';

@InputType()
export class PublicationCommentUpdateManyWithWhereWithoutUserInput {

    @Field(() => PublicationCommentScalarWhereInput, {nullable:false})
    @Type(() => PublicationCommentScalarWhereInput)
    where!: PublicationCommentScalarWhereInput;

    @Field(() => PublicationCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationCommentUpdateManyMutationInput)
    data!: PublicationCommentUpdateManyMutationInput;
}
