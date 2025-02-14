import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessUpdateWithoutThemesInput } from './process-update-without-themes.input';
import { Type } from 'class-transformer';
import { ProcessCreateWithoutThemesInput } from './process-create-without-themes.input';
import { ProcessWhereInput } from './process-where.input';

@InputType()
export class ProcessUpsertWithoutThemesInput {

    @Field(() => ProcessUpdateWithoutThemesInput, {nullable:false})
    @Type(() => ProcessUpdateWithoutThemesInput)
    update!: ProcessUpdateWithoutThemesInput;

    @Field(() => ProcessCreateWithoutThemesInput, {nullable:false})
    @Type(() => ProcessCreateWithoutThemesInput)
    create!: ProcessCreateWithoutThemesInput;

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;
}
