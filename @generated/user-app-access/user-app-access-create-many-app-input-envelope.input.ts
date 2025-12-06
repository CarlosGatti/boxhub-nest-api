import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateManyAppInput } from './user-app-access-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class UserAppAccessCreateManyAppInputEnvelope {

    @Field(() => [UserAppAccessCreateManyAppInput], {nullable:false})
    @Type(() => UserAppAccessCreateManyAppInput)
    data!: Array<UserAppAccessCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
