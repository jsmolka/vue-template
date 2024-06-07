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
            size="icon"
            :disabled="disabled"
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
      <h1>Dialog</h1>
      <div class="grid grid-cols-2 gap-2">
        <Dialog v-slot="{ close }">
          <DialogTrigger as-child>
            <Button variant="secondary">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogFooter>
              <Button variant="default" @click="close">Button</Button>
              <Button variant="secondary" @click="close">Button</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button
          variant="secondary"
          @click="
            dialog({
              title: 'Title',
              description: 'Description',
              content: 'Content',
              buttons: [
                { text: 'Button', variant: 'default' },
                { text: 'Button', variant: 'secondary' },
              ],
            })
          "
        >
          Open
        </Button>
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
        <InputNumber
          v-for="disabled in [false, true]"
          placeholder="Input number"
          :min="-1000"
          :max="+1000"
          :precision="2"
          unit="m"
          :disabled="disabled"
        />
      </div>
    </div>

    <div class="grid gap-2">
      <h1>Label</h1>
      <Label>Label</Label>
      <Input placeholder="Input" />
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
              <GearIcon />
              <SelectItemText>Value {{ item }}</SelectItemText>
            </span>
          </template>
        </Select>
        <SelectRoot v-for="disabled in [false, true]" :disabled="disabled">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <template
              v-for="(items, index) in [
                [1, 2, 3],
                [4, 5, 6],
              ]"
            >
              <SelectSeparator v-if="index > 0" />
              <SelectGroup>
                <SelectLabel>Label</SelectLabel>
                <SelectItem v-for="item in items" :value="item.toString()">
                  <SelectItemText>Value {{ item }}</SelectItemText>
                </SelectItem>
              </SelectGroup>
            </template>
          </SelectContent>
        </SelectRoot>
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
      <h1>Table</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead v-for="value in [1, 2, 3]">Head {{ value }}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="_ in [1, 2, 3]">
            <TableCell v-for="value in [1, 2, 3]">Value {{ value }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="grid gap-2">
      <h1>Tabs</h1>
      <Tabs :default-value="1">
        <TabsList class="grid grid-cols-3">
          <TabsTrigger :value="1">Tab 1</TabsTrigger>
          <TabsTrigger :value="2">Tab 2</TabsTrigger>
          <TabsTrigger :value="3" disabled>Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="value in [1, 2, 3]"
          class="px-2 py-1.5 border rounded-sm"
          :value="value"
        >
          Content {{ value }}
        </TabsContent>
      </Tabs>
    </div>

    <div class="grid gap-2">
      <h1>Toast</h1>
      <Button variant="secondary" @click="toast('Message')">Show</Button>
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { dialog } from '@/utils/dialog';
import { toast } from '@/utils/toast';
import { DotsVerticalIcon, GearIcon } from '@radix-icons/vue';

const text =
  'Vue.js is an open-source front end JavaScript framework for building user interfaces and single-page applications.';
</script>

<style scoped>
h1 {
  @apply text-base;
  @apply text-shade-1;
  @apply font-semibold;
}
</style>
