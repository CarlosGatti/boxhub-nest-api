import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyShortLinkCount {

    @Field(() => Int, {nullable:false})
    events?: number;
}
