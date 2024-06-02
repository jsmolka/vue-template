<template>
  <div class="flex flex-col gap-4 p-4 mx-auto max-w-sm">
    <Logo class="size-8 self-center" />

    <h1>Button</h1>
    <div class="grid gap-2">
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
    <div class="flex gap-2">
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
          <DropdownMenuCheckboxItem>Value</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Radio Group</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup model-value="1">
            <DropdownMenuRadioItem value="1">Value 1</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="2">Value 2</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="3">Value 3</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <h1>Input</h1>
    <div class="flex flex-col gap-2">
      <Input placeholder="Input" />
      <InputNumber
        placeholder="Input number"
        :min="-10000"
        :max="+10000"
        :precision="2"
        :unit="'m'"
      />
    </div>

    <h1>Label</h1>
    <div class="grid gap-2">
      <Label>Length</Label>
      <InputNumber :model-value="100" unit="mm" />
    </div>

    <h1>Select</h1>
    <div class="flex gap-2">
      <Select :items="[1, 2, 3]" placeholder="Select">
        <template #item="{ item }">
          <SelectItemText>Value {{ item }}</SelectItemText>
        </template>
      </Select>
      <Select :items="[]" placeholder="Select" disabled />
    </div>

    <h1>Switch</h1>
    <div class="grid gap-2">
      <div class="flex gap-2">
        <Switch :model-value="true" />
        <Switch :model-value="true" disabled />
      </div>
      <div class="flex gap-2">
        <Switch :model-value="false" />
        <Switch :model-value="false" disabled />
      </div>
    </div>

    <h1>Tabs</h1>
    <Tabs default-value="1">
      <TabsList class="grid grid-cols-2">
        <TabsTrigger value="1">One</TabsTrigger>
        <TabsTrigger value="2">Two</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <div class="border rounded-sm p-2">Content 1</div>
      </TabsContent>
      <TabsContent value="2">
        <div class="border rounded-sm p-2">Content 2</div>
      </TabsContent>
    </Tabs>

    <h1>Tooltip</h1>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
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
import { Input, InputNumber } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItemText } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DotsVerticalIcon } from '@radix-icons/vue';
</script>

<style scoped>
h1 {
  @apply text-lg;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
