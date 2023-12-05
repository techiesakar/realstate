"use client";
import { useEffect, useState } from "react";
import { SwitchPropertyType } from "./switch-property-type";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const PropertyFilterForm = () => {
  const [type, setType] = useState("all");
  useEffect(() => {
    console.log(type);
  }, [type]);

  const formSchema = z.object({
    keyword: z.string().optional(),
    city: z.string().optional(),
    type: z.string().optional(),
    bedroom: z.string().optional(),
    bathroom: z.string().optional(),
    min_price: z.string().optional(),
    max_price: z.string().optional(),
    max_area: z.string().optional(),
    min_area: z.string().optional(),
    property_id: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keyword: "",
      city: "",
      type: "",
      bedroom: "",
      bathroom: "",
      min_price: "",
      max_price: "",
      min_area: "",
      max_area: "",
      property_id: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="translate-y-[20%]">
      <div className="flex items-center justify-center">
        <SwitchPropertyType type={type} setType={setType} />
      </div>
      <div className="py-6 px-8 rounded-md bg-white shadow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4 justify-between items-center">
              <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Keyword</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>City</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Commercial</SelectLabel>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="shop">Shop</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Residential</SelectLabel>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="multi family home">
                            Multi Family Home
                          </SelectItem>
                          <SelectItem value="single family home">
                            Single Family Home
                          </SelectItem>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedroom"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Bedrooms</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[220px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathroom"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Bathrooms</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[220px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 justify-between items-end">
              <FormField
                control={form.control}
                name="min_price"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Minimum Price</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Min Price</SelectLabel>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="500">$500</SelectItem>
                          <SelectItem value="1000">$1000</SelectItem>
                          <SelectItem value="2500">$2500</SelectItem>
                          <SelectItem value="5000">$5000</SelectItem>
                          <SelectItem value="10000">$10000</SelectItem>
                          <SelectItem value="25000">$25000</SelectItem>
                          <SelectItem value="50000">$50000</SelectItem>
                          <SelectItem value="100000">$100000</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="max_price"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Maximum Price</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Min Price</SelectLabel>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="500">$500</SelectItem>
                          <SelectItem value="1000">$1000</SelectItem>
                          <SelectItem value="2500">$2500</SelectItem>
                          <SelectItem value="5000">$5000</SelectItem>
                          <SelectItem value="10000">$10000</SelectItem>
                          <SelectItem value="25000">$25000</SelectItem>
                          <SelectItem value="50000">$50000</SelectItem>
                          <SelectItem value="100000">$100000</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="min_area"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Min Area (Sq Ft)</FormLabel>

                    <FormControl>
                      <Input type="number" min={0} max={1000} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="max_area"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Max Area (Sq Ft)</FormLabel>

                    <FormControl>
                      <Input type="number" min={0} max={10000} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="property_id"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Property ID</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-secondary hover:bg-hover">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
