import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateManyStorageInput } from './storage-member-create-many-storage.input';
import { Type } from 'class-transformer';

@InputType()
export class StorageMemberCreateManyStorageInputEnvelope {

    @Field(() => [StorageMemberCreateManyStorageInput], {nullable:false})
    @Type(() => StorageMemberCreateManyStorageInput)
    data!: Array<StorageMemberCreateManyStorageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
