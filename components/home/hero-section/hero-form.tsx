"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button';


const formSchema = z.object({
    purpose: z.string().optional(),
    type: z.string().optional(),
    location: z.string().optional()

})
export const HeroForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='-mr-32 px-8 py-5 rounded bg-white flex items-end gap-3'>
                <div className="gap-4   text-black flex items-center">
                    <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs'>But or rent</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="w-[180px] text-gray-400 text-sm rounded border border-gray-200" >
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="rent">For Rent</SelectItem>
                                            <SelectItem value="sale">For Sale</SelectItem>
                                            <SelectItem value="foreclosures">Foreclosures</SelectItem>
                                            <SelectItem value="construction">New Construction</SelectItem>
                                            <SelectItem value="listing">New Listing</SelectItem>
                                            <SelectItem value="resale">Resale</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs'>Looking For</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="w-[180px] text-gray-400 text-sm rounded border border-gray-200" >
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Commercial</SelectItem>
                                            <SelectItem value="2">- Office</SelectItem>
                                            <SelectItem value="3">- Shop</SelectItem>
                                            <SelectItem value="4">Residential</SelectItem>
                                            <SelectItem value="5">- Apartment</SelectItem>
                                            <SelectItem value="6">- Condo</SelectItem>
                                            <SelectItem value="7">- Multi Family Home</SelectItem>
                                            <SelectItem value="8">- Single Family Home</SelectItem>
                                            <SelectItem value="9">- Studio</SelectItem>
                                            <SelectItem value="10">- Villa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs'>Location</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="w-[180px] text-gray-400 text-sm rounded border border-gray-200" >
                                            <SelectValue placeholder="All Cities" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Butwal</SelectItem>
                                            <SelectItem value="2">Bhairahawa</SelectItem>
                                            <SelectItem value="3">Kathmandu</SelectItem>
                                            <SelectItem value="4">Chitwan</SelectItem>
                                            <SelectItem value="5">Pokhara</SelectItem>
                                            <SelectItem value="6">Resale</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type='submit' className="bg-secondary  bottom-8 hover:bg-hover transition-all  text-white p-4 cursor-pointer rounded">Go</Button>
            </form>
        </Form>
    )

}