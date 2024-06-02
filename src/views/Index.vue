<template>
  <div class="flex flex-col gap-4 p-4 mx-auto max-w-sm">
    <h1>Button</h1>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <template v-for="variant in ['default', 'secondary', 'outline', 'ghost']">
          <Button v-for="disabled in [false, true]" :variant="variant" :disabled="disabled">
            <span class="capitalize">{{ variant }}</span>
          </Button>
        </template>
      </div>
      <div class="flex gap-2">
        <template v-for="variant in ['outline', 'ghost']">
          <Button :variant="variant" size="icon">
            <DotsVerticalIcon />
          </Button>
        </template>
      </div>
    </div>

    <h1>Checkbox</h1>
    <div class="flex flex-wrap gap-2">
      <Checkbox :model-value="false" />
      <Checkbox :model-value="true" />
      <Checkbox :model-value="true" disabled />
    </div>

    <h1>Dropdown Menu</h1>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Items</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Item</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Item</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>Item</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Item</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Checkbox</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem checked>Value</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Value</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Radio Group</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup :model-value="'1'">
            <DropdownMenuRadioItem value="1">Value 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2">Value 2</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsVerticalIcon } from '@radix-icons/vue';
</script>

<style scoped>
h1 {
  @apply text-lg;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
