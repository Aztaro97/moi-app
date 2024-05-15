import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  emirateStateData,
  gearData,
  licenseTypeData,
  politicingTypeData,
  serviceTypeData,
} from "@/constants/politicingOptionsData";

const formSchemaOption = z.object({
  label: z.string(),
  value: z.string(),
});

const formSchema = z.object({
  emirate: formSchemaOption,
  licenseType: formSchemaOption,
  serviceType: formSchemaOption,
  gear: formSchemaOption,
  type: formSchemaOption,
});

export default function PoliticingFormStepOne() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="emirate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emirate</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Emirate" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {emirateStateData.map((emirate, index) => (
                    <SelectItem key={index} value={emirate.value}>
                      {emirate.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="licenseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>License Type</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select License Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {licenseTypeData.map((license, index) => (
                    <SelectItem key={index} value={license.value}>
                      {license.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="licenseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Center</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service Center" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceTypeData.map((service, index) => (
                    <SelectItem key={index} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gear</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gear" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gearData.map((gear, index) => (
                    <SelectItem key={index} value={gear.value}>
                      {gear.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Try Type</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Try" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {politicingTypeData.map((type, index) => (
                    <SelectItem key={index} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
