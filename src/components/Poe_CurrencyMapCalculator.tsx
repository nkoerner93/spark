"use client";
import { FC } from "react";
import Cookies from "js-cookie";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/shad-cn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shad-cn/form";
import { Input } from "@/components/ui/shad-cn/input";
import { currencyInMapFormSchema } from "src/schemas/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/shad-cn/select";
import { poeMaps } from "src/constants/authImageConstants";
import { useState } from "react";

const Poe_CurrencyMapCalculator: FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof currencyInMapFormSchema>>({
    resolver: zodResolver(currencyInMapFormSchema),
    defaultValues: {
      map: undefined, // Default value for map field
      divine: 0, // Default value for divine field
      chaos: 0, // Default value for chaos field
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof currencyInMapFormSchema>) => {
    setFormSubmitted(true);
    // Serialize the values into an object
    const cookieValue = JSON.stringify({
      map: values.map,
      divine: values.divine,
      chaos: values.chaos,
    });

    // Set the cookie
    Cookies.set("mapresults", cookieValue);
  };

  const handleShowMapResults = () => {
    // Retrieve the mapresults cookie
    const mapResultsCookie = Cookies.get("mapresults");

    // Check if the cookie exists
    if (mapResultsCookie) {
      // Parse the cookie value back into an object
      const mapResults = JSON.parse(mapResultsCookie);
      console.log(mapResults);
    }
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Render the map select field */}
          <FormField
            control={form.control}
            name="map"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    {...field}
                    onValueChange={(value) => {
                      field.onChange(value);
                      console.log(value);
                    }}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a map" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Maps</SelectLabel>
                        {poeMaps.map((map) => (
                          <SelectItem key={map} value={map}>
                            {map}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="divine"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md flex flex-row items-center gap-1">
                  <img
                    src="/images/pathofexile/currency_divineorb.png"
                    alt="divineorb"
                    width={25}
                    height={25}
                  />
                  Divine Orbs
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Divine Orbs"
                    {...field}
                  ></Input>
                </FormControl>
                <FormDescription>
                  How many Divine Orbs this run?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chaos"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md flex flex-row items-center gap-1">
                  <img
                    src="/images/pathofexile/currency_chaosorb.png"
                    alt="divineorb"
                    width={25}
                    height={25}
                  />
                  Chaos Orbs
                </FormLabel>
                <FormControl>
                  <Input placeholder="Chaos Orbs" {...field}></Input>
                </FormControl>
                <FormDescription>How many Chaos Orbs?</FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default Poe_CurrencyMapCalculator;
