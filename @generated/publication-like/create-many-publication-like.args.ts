import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeCreateManyInput } from './publication-like-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPublicationLikeArgs {

    @Field(() => [PublicationLikeCreateManyInput], {nullable:false})
    @Type(() => PublicationLikeCreateManyInput)
    data!: Array<PublicationLikeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
