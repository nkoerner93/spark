"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shad-cn/dialog";
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
import { Loader2 } from "lucide-react";
import {
  createMapResult,
  deleteAllMapResults,
} from "@/app/actions/mapCalculatorActions";

const Poe_CurrencyMapCalculator = () => {
  const [open, setOpen] = useState(false);
  const [createSubmitted, setCreateSubmitted] = useState(false);
  const [deleteSubmitted, setDeleteSubmitted] = useState(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof currencyInMapFormSchema>>({
    resolver: zodResolver(currencyInMapFormSchema),
    defaultValues: {
      map: undefined, // Default value for map field
      divine: 0, // Default value for divine field
      chaos: 0, // Default value for chaos field
    },
  });

  // Create Map Result & Revalidate
  const onCreateMaps = async (
    values: z.infer<typeof currencyInMapFormSchema>,
  ) => {
    setCreateSubmitted(true);
    try {
      await createMapResult(values);
      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error creating map result:", error);
    } finally {
      setCreateSubmitted(false);
    }
  };

  // Delete all MapResults & Revalidate
  const onDeleteMaps = async () => {
    setDeleteSubmitted(true);
    try {
      await deleteAllMapResults();
      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error deleting maps:", error);
    } finally {
      setOpen(false);
      setDeleteSubmitted(false);
    }
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onCreateMaps)} className="space-y-8">
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

          <div className="flex flex-row gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
              {/* Use a div or span styled as a button for the trigger */}
              <DialogTrigger asChild>
                <div className="inline-flex">
                  <Button type="button">Delete Maps</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    all your maps from your stored recent maps.
                  </DialogDescription>
                </DialogHeader>
                {deleteSubmitted ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Button type="button" onClick={onDeleteMaps}>
                    Delete Maps
                  </Button>
                )}
              </DialogContent>
            </Dialog>
            {createSubmitted ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Poe_CurrencyMapCalculator;
