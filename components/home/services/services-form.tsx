"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters"
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters"
    }).email(),
    message: z.string().min(2, {
        message: "Message must be at least 10 characters"
    }),
})
export const ServicesForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
            email: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <div className='px-10 py-16 rounded-md bg-primary space-y-6'>
            <div className='uppercase text-secondary text-left text-sm font-semibold'>Contact us</div>
            <h2 className='text-white text-2xl font-bold'>Are you ready to talk to an expert?
            </h2>
            <Form {...form}>
                <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Name' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Email' {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder='Message' {...field} />

                            </FormControl>
                        </FormItem>
                    )} />
                    <Button type="submit" className='bg-secondary text-white w-full hover:bg-hover transition'>Submit</Button>

                </form>
            </Form>
        </div>
    )
}
