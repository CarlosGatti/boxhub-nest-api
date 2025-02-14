import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateManyContainerInput } from './item-create-many-container.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemCreateManyContainerInputEnvelope {

    @Field(() => [ItemCreateManyContainerInput], {nullable:false})
    @Type(() => ItemCreateManyContainerInput)
    data!: Array<ItemCreateManyContainerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
