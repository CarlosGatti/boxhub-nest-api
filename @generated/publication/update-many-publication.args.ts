import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationUpdateManyMutationInput } from './publication-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PublicationWhereInput } from './publication-where.input';

@ArgsType()
export class UpdateManyPublicationArgs {

    @Field(() => PublicationUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationUpdateManyMutationInput)
    data!: PublicationUpdateManyMutationInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;
}
