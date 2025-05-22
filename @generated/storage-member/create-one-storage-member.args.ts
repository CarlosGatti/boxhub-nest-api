import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberCreateInput } from './storage-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStorageMemberArgs {

    @Field(() => StorageMemberCreateInput, {nullable:false})
    @Type(() => StorageMemberCreateInput)
    data!: StorageMemberCreateInput;
}
