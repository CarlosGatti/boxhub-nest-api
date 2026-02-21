import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareCreateManyUserInput } from './bucket-share-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketShareCreateManyUserInputEnvelope {

    @Field(() => [BucketShareCreateManyUserInput], {nullable:false})
    @Type(() => BucketShareCreateManyUserInput)
    data!: Array<BucketShareCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
