<template>
  <div class="grid gap-4 max-w-sm mx-auto p-4">
    <Logo class="place-self-center size-8 text-shade-1" />

    <div class="grid gap-2">
      <h1>Button</h1>
      <div class="grid grid-cols-2 gap-2">
        <template v-for="variant in ['default', 'secondary', 'outline', 'ghost']">
          <Button v-for="disabled in [false, true]" :variant="variant" :disabled="disabled">
            Button
          </Button>
        </template>
        <div v-for="disabled in [false, true]" class="grid grid-cols-4 gap-2">
          <Button
            v-for="variant in ['default', 'secondary', 'outline', 'ghost']"
            :variant="variant"
            :disabled="disabled"
            size="icon"
          >
            <DotsVerticalIcon />
          </Button>
        </div>
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Checkbox</h1>
      <div class="grid grid-cols-4 gap-2">
        <Checkbox :model-value="true" />
        <Checkbox :model-value="true" disabled />
        <Checkbox />
        <Checkbox disabled />
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Dropdown Menu</h1>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Item</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
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
                  <DropdownMenuItem disabled>
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
            <DropdownMenuCheckboxItem model-value>Value</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Value</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem disabled>Value</DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Radio Group</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup model-value="1">
              <DropdownMenuRadioItem value="1">Value 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="2">Value 2</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="3" disabled>Value 3</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <div class="grid gap-2">
      <h1>Input</h1>
      <div class="grid grid-cols-2 gap-2">
        <Input placeholder="Input" />
        <Input placeholder="Input" disabled />
        <InputNumber placeholder="Input number" :precision="2" unit="mm" />
        <InputNumber placeholder="Input number" :precision="2" unit="mm" disabled />
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Label</h1>
      <Label>Length</Label>
      <InputNumber :model-value="100" unit="mm" />
    </div>

    <div class="grid gap-2">
      <h1>Select</h1>
      <div class="grid grid-cols-2 gap-2">
        <Select
          v-for="disabled in [false, true]"
          :items="[1, 2, 3]"
          placeholder="Select"
          :disabled="disabled"
        >
          <template #item="{ item }">
            <span class="flex items-center gap-2">
              <CookieIcon />
              <SelectItemText>Value {{ item }}</SelectItemText>
            </span>
          </template>
        </Select>
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Switch</h1>
      <div class="grid grid-cols-4 gap-2">
        <Switch :model-value="true" />
        <Switch :model-value="true" disabled />
        <Switch />
        <Switch disabled />
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Tabs</h1>
      <Tabs default-value="1">
        <TabsList class="grid grid-cols-3">
          <TabsTrigger value="1">Tab 1</TabsTrigger>
          <TabsTrigger value="2">Tab 2</TabsTrigger>
          <TabsTrigger value="3" disabled>Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <div class="border rounded-sm p-2">Tab content 1</div>
        </TabsContent>
        <TabsContent value="2">
          <div class="border rounded-sm p-2">Tab content 2</div>
        </TabsContent>
        <TabsContent value="3">
          <div class="border rounded-sm p-2">Tab content 3</div>
        </TabsContent>
      </Tabs>
    </div>

    <div class="grid gap-2">
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
import { CookieIcon, DotsVerticalIcon } from '@radix-icons/vue';
</script>

<style scoped>
h1 {
  @apply text-lg;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
