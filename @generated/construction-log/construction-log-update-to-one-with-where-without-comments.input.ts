import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { Type } from 'class-transformer';
import { ConstructionLogUpdateWithoutCommentsInput } from './construction-log-update-without-comments.input';

@InputType()
export class ConstructionLogUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;

    @Field(() => ConstructionLogUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ConstructionLogUpdateWithoutCommentsInput)
    data!: ConstructionLogUpdateWithoutCommentsInput;
}
