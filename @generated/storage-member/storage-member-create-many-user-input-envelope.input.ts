import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateManyUserInput } from './storage-member-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class StorageMemberCreateManyUserInputEnvelope {

    @Field(() => [StorageMemberCreateManyUserInput], {nullable:false})
    @Type(() => StorageMemberCreateManyUserInput)
    data!: Array<StorageMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
