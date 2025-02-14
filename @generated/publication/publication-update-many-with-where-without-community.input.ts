import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationScalarWhereInput } from './publication-scalar-where.input';
import { Type } from 'class-transformer';
import { PublicationUpdateManyMutationInput } from './publication-update-many-mutation.input';

@InputType()
export class PublicationUpdateManyWithWhereWithoutCommunityInput {

    @Field(() => PublicationScalarWhereInput, {nullable:false})
    @Type(() => PublicationScalarWhereInput)
    where!: PublicationScalarWhereInput;

    @Field(() => PublicationUpdateManyMutationInput, {nullable:false})
    @Type(() => PublicationUpdateManyMutationInput)
    data!: PublicationUpdateManyMutationInput;
}
