import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStorageMemberArgs {

    @Field(() => StorageMemberWhereInput, {nullable:true})
    @Type(() => StorageMemberWhereInput)
    where?: StorageMemberWhereInput;
}
