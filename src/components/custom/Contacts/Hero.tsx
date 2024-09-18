import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name should be more than 2 characters" }),
  bussinessName: z
    .string()
    .min(2, { message: "Bussiness name should be more than 2 characters" }),
  email: z.string().email({ message: "Email is required" }),
  number: z.number({ message: "Number should be 10 digit long" }).min(10),
  reason: z.string().min(10, { message: "Minimum 10 characters is required" }),
});

const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bussinessName: "",
      email: "",
      reason: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full h-screen flex items-center justify-between gap-3 my-5">
      <img
        src="/images/contactimage.png"
        alt="contactIkmage"
        className="hidden lg:block w-[20%]"
      />
      <div className="w-[80%] h-[90%] mx-auto p-3">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center my-3">
          Let's Talk-Contact Our Experts
        </h1>
        <p className="text-base lg:text-lg text-center lg:w-[60%] mx-auto">
          Tell us a little bit about yourself and your queries. Our customer
          experience team will reach out to you within 24 hours.
        </p>
        <div className="w-full  p-2 my-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="w-full lg:w-[80%] mx-auto gap-2">
                <div className="w-full  flex items-center flex-col lg:flex-row justify-between ">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[45%]">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bussinessName"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-[48%]">
                        <FormLabel>Bussiness Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Bussiness Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Bussiness Email*</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Number*</FormLabel>
                      <FormControl>
                        <Input placeholder="9100999087" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Contact Request*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-4 bg-blue-500">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
