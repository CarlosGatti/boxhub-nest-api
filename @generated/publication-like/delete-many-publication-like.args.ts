import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPublicationLikeArgs {

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    @Type(() => PublicationLikeWhereInput)
    where?: PublicationLikeWhereInput;
}
