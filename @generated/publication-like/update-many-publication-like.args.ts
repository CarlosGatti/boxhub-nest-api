import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeUpdateManyMutationInput } from './publication-like-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PublicationLikeWhereInput } from './publication-like-where.input';

@ArgsType()
export class UpdateManyPublicationLikeArgs {

    @Field(() => PublicationLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationLikeUpdateManyMutationInput)
    data!: PublicationLikeUpdateManyMutationInput;

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    @Type(() => PublicationLikeWhereInput)
    where?: PublicationLikeWhereInput;
}
