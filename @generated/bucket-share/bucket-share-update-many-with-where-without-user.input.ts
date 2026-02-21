import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareScalarWhereInput } from './bucket-share-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketShareUpdateManyMutationInput } from './bucket-share-update-many-mutation.input';

@InputType()
export class BucketShareUpdateManyWithWhereWithoutUserInput {

    @Field(() => BucketShareScalarWhereInput, {nullable:false})
    @Type(() => BucketShareScalarWhereInput)
    where!: BucketShareScalarWhereInput;

    @Field(() => BucketShareUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketShareUpdateManyMutationInput)
    data!: BucketShareUpdateManyMutationInput;
}
