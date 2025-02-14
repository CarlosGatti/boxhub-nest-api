import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Container } from '../container/container.model';
import { FamilyCount } from './family-count.output';

@ObjectType()
export class Family {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [User], {nullable:true})
    members?: Array<User>;

    @Field(() => [Container], {nullable:true})
    containers?: Array<Container>;

    @Field(() => FamilyCount, {nullable:false})
    _count?: FamilyCount;
}
