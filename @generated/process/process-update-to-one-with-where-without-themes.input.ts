import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';
import { Type } from 'class-transformer';
import { ProcessUpdateWithoutThemesInput } from './process-update-without-themes.input';

@InputType()
export class ProcessUpdateToOneWithWhereWithoutThemesInput {

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;

    @Field(() => ProcessUpdateWithoutThemesInput, {nullable:false})
    @Type(() => ProcessUpdateWithoutThemesInput)
    data!: ProcessUpdateWithoutThemesInput;
}
