import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyStorageInput } from './user-create-many-storage.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyStorageInputEnvelope {

    @Field(() => [UserCreateManyStorageInput], {nullable:false})
    @Type(() => UserCreateManyStorageInput)
    data!: Array<UserCreateManyStorageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
