"use client"
import React, { Component } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from '@/lib/validators';
import { eventDefaultValues } from '@/constants';

export type EventFormProp = {
  userID: string;
  type: "Create" | "Update";
};

const EventForm = ( {userID, type }:EventFormProp ) => {
  const initialValues = eventDefaultValues;
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
})

  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Title</FormLabel>
                <FormControl>               
                  <Input placeholder="Event title" {...field} className='input-field' />
                </FormControl>
                <FormMessage />
              </FormItem>  
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EventForm