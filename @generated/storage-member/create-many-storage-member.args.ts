import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberCreateManyInput } from './storage-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStorageMemberArgs {

    @Field(() => [StorageMemberCreateManyInput], {nullable:false})
    @Type(() => StorageMemberCreateManyInput)
    data!: Array<StorageMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
