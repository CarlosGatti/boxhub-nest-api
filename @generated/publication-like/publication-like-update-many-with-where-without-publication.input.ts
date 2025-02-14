import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeScalarWhereInput } from './publication-like-scalar-where.input';
import { Type } from 'class-transformer';
import { PublicationLikeUpdateManyMutationInput } from './publication-like-update-many-mutation.input';

@InputType()
export class PublicationLikeUpdateManyWithWhereWithoutPublicationInput {

    @Field(() => PublicationLikeScalarWhereInput, {nullable:false})
    @Type(() => PublicationLikeScalarWhereInput)
    where!: PublicationLikeScalarWhereInput;

    @Field(() => PublicationLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationLikeUpdateManyMutationInput)
    data!: PublicationLikeUpdateManyMutationInput;
}
