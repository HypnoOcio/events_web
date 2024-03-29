'use client';
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/mongodb/models/category.model';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from '../ui/input';

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
}



const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [ newCategory, setNewCategory ] = useState<string>('');

  const handleAddCategory = () => { 
    /**add functionality for storing category into DB*/
  }
  return (
    <Select onValueChange={onChangeHandler} value={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent >
        {categories.length > 0 && categories.map((category) => (
          <SelectItem key={category._id} value={category.name} className='select-item p-reglar-14'>
            {category.name}
          </SelectItem>
        ))}
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500
          hover:bg-primary-50 focus:text-primary-500">Open</AlertDialogTrigger>
          <AlertDialogContent className='bg-white'>
            <AlertDialogHeader>
              <AlertDialogTitle>New category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input type='text' placeholder='Category name' className='input-field mt-3'
                onChange={(e) => setNewCategory(e.target.value)} />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  )
}

export default Dropdown