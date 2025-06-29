import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogUpdateWithoutCommentsInput } from './construction-log-update-without-comments.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';
import { ConstructionLogWhereInput } from './construction-log-where.input';

@InputType()
export class ConstructionLogUpsertWithoutCommentsInput {

    @Field(() => ConstructionLogUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ConstructionLogUpdateWithoutCommentsInput)
    update!: ConstructionLogUpdateWithoutCommentsInput;

    @Field(() => ConstructionLogCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ConstructionLogCreateWithoutCommentsInput)
    create!: ConstructionLogCreateWithoutCommentsInput;

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;
}
