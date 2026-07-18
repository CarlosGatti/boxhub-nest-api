import { BadRequestException } from '@nestjs/common';

export async function reorderScopedItems<T extends { id: number }>(params: {
  parentId: number;
  parentField: string;
  itemIds: number[];
  existingItems: T[];
  parentIdFromItem: (item: T) => number;
  updateOrder: (id: number, order: number) => Promise<unknown>;
  orderedItems: () => Promise<unknown>;
}): Promise<unknown> {
  if (params.existingItems.length !== params.itemIds.length) {
    throw new BadRequestException('One or more items do not belong to the parent scope');
  }
  for (const item of params.existingItems) {
    if (params.parentIdFromItem(item) !== params.parentId) {
      throw new BadRequestException('One or more items do not belong to the parent scope');
    }
  }
  await Promise.all(
    params.itemIds.map((id, index) => params.updateOrder(id, index)),
  );
  return params.orderedItems();
}
