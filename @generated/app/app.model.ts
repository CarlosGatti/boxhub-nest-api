import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserAppAccess } from '../user-app-access/user-app-access.model';
import { AppCount } from './app-count.output';

@ObjectType()
export class App {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserAppAccess], {nullable:true})
    users?: Array<UserAppAccess>;

    @Field(() => AppCount, {nullable:false})
    _count?: AppCount;
}
